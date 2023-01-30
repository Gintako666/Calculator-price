/* eslint-disable no-console */
import classNames from 'classnames';
import React, { useMemo, useState, useEffect } from 'react';
import { actions as activeBarActions } from '../features/activeBar';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { useWindowSizes } from '../hooks/use-windowSize';

type Props = {
  name: string
  minPayment: number,
  maxPayment: number,
  options: {
    name: string,
    storagePrice: number,
    transferPrice: number
    free: number;
  }[],
  number: number,
};

const colorsBar = ['red', 'orange', 'purple', 'blue'];

export const Chart: React.FC<Props> = ({
  name, minPayment, maxPayment, options, number,
}) => {
  const dispatch = useAppDispatch();
  const { transfer, storage } = useAppSelector(state => state.valueSliders);
  const { activeSliders } = useAppSelector(state => state.activeBarSlice);
  const [selectOption, setSelectOption] = useState(options[0]);
  const [windowWidth] = useWindowSizes();

  const totalPrice = useMemo(() => {
    const transferValue = transfer > selectOption.free
      ? transfer - selectOption.free
      : 0;

    const storageValue = storage > selectOption.free
      ? storage - selectOption.free
      : 0;

    return Math.round(
      ((transferValue * selectOption.transferPrice)
      + (storageValue * selectOption.storagePrice))
      * 100,
    ) / 100;
  }, [transfer, storage, selectOption]);

  const displayPrise = useMemo(() => {
    return minPayment > totalPrice
      ? minPayment
      : ((totalPrice > maxPayment && maxPayment) || totalPrice);
  }, [totalPrice]);

  useEffect(() => {
    dispatch(activeBarActions.setActiveBar({
      number,
      value: displayPrise,
    }));
  }, [displayPrise]);

  return (
    <div className="chart">
      <div className="chart__bar">
        <div className="chart__bar__price">
          {displayPrise}
        </div>
        <div
          className={classNames(
            'chart__bar__item',
            !activeSliders[number] ? '' : `chart__bar__item--${colorsBar[number]}`,
          )}
          style={{
            height: windowWidth > 1020 ? '100%' : `${displayPrise}%`,
            width: windowWidth < 1020 ? 'auto' : `${displayPrise}%`,
          }}
        >

        </div>
      </div>
      <div className="chart__name">
        <strong>
          {name}
        </strong>
        {options.length > 1 && (
          <form className="chart__options">
            {options.map(item => {
              return (
                <>
                  <div
                    aria-hidden
                    onClick={() => {
                      setSelectOption(item);
                    }}
                  >
                    {item.name}
                    <input
                      checked={item.name === selectOption.name}
                      type="radio"
                      name="fav_language"
                    />
                  </div>
                </>
              );
            })}
          </form>
        )}
      </div>
    </div>
  );
};
