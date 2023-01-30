import React from 'react';
import { Chart } from './Сhart';

export const Charts: React.FC = () => {
  return (
    <div className="charts">
      <Chart
        name="backblaze"
        minPayment={7}
        maxPayment={1000}
        number={0}
        options={[{
          name: '',
          storagePrice: 0.005,
          transferPrice: 0.01,
          free: 0,
        },
        ]}
      />
      <Chart
        name="bunny"
        minPayment={0}
        maxPayment={10}
        number={1}
        options={[{
          name: 'HDD',
          storagePrice: 0.01,
          transferPrice: 0.01,
          free: 0,
        },
        {
          name: 'SSD',
          storagePrice: 0.02,
          transferPrice: 0.01,
          free: 0,
        },
        ]}
      />
      <Chart
        name="scaleway"
        minPayment={0}
        maxPayment={1000}
        number={2}
        options={[{
          name: 'Multi',
          storagePrice: 0.06,
          transferPrice: 0.02,
          free: 75,
        },
        {
          name: 'Single',
          storagePrice: 0.03,
          transferPrice: 0.02,
          free: 75,
        },
        ]}
      />
      <Chart
        name="vultr"
        minPayment={5}
        maxPayment={1000}
        number={3}
        options={[{
          name: '',
          storagePrice: 0.01,
          transferPrice: 0.01,
          free: 0,
        },
        ]}
      />
    </div>
  );
};
