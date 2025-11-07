'use client';
import { APP_CONSTANTS } from '@/config/constants';
import { cn } from '@/utils';
import { useState } from 'react';

const PERIOD_TYPE_ITEMS = [
  {
    id: 1,
    type: APP_CONSTANTS.PERIOD_TYPE.DAY,
  },
  {
    id: 2,
    type: APP_CONSTANTS.PERIOD_TYPE.WEEK,
  },
  {
    id: 3,
    type: APP_CONSTANTS.PERIOD_TYPE.MONTH,
  },
  {
    id: 4,
    type: APP_CONSTANTS.PERIOD_TYPE.YEAR,
  },
];
const PeriodType: React.FC = () => {
  const [selectedPeriodType, setSelectedPeriodType] = useState<string>(
    APP_CONSTANTS.PERIOD_TYPE.YEAR,
  );
  return (
    <ul className="flex gap-4 mt-2">
      {PERIOD_TYPE_ITEMS.map((item) => (
        <li key={item.id}>
          <button
            onClick={() => setSelectedPeriodType(item.type)}
            className={cn(
              'text-[15px] text-yellow-default bg-white w-14 h-6 flex items-center justify-center rounded-xl',
              item.type === selectedPeriodType
                ? 'bg-yellow-default text-white'
                : 'hover:bg-yellow-default hover:text-white transition-all',
            )}
          >
            {item.type}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default PeriodType;
