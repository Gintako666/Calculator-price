import React, { useEffect, useState } from 'react';
import { useDebounce } from '../hooks/use-debounce';

type Props = {
  name: string;
  fn: (value: number) => void;
};

export const PriceSlider: React.FC<Props> = ({ name, fn }) => {
  const [value, setValue] = useState(0);

  const debounceValue = useDebounce(value, 500);

  useEffect(() => {
    fn(debounceValue);
  }, [debounceValue]);

  return (
    <div className="price-slider">
      {`${name}: ${value}GB`}
      <input
        type="range"
        min="0"
        max="1000"
        value={value}
        step={1}
        onChange={(e) => {
          setValue(+e.target.value);
        }}
      />
    </div>
  );
};
