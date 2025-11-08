import { CupIcon, KnifeIcon } from '@/components/atoms/Icons';
import type { IHealthyFilter } from '@/types';
import { EnumHealthyTypes } from '@/types';

import HealthyFilterItem from './HealthyFilterItem';

const HEALTHY_FILTERS: IHealthyFilter[] = [
  {
    id: 1,
    name: EnumHealthyTypes.MORNING,
    icon: <KnifeIcon />,
  },
  {
    id: 2,
    name: EnumHealthyTypes.LUNCH,
    icon: <KnifeIcon />,
  },
  {
    id: 3,
    name: EnumHealthyTypes.DINNER,
    icon: <KnifeIcon />,
  },
  {
    id: 4,
    name: EnumHealthyTypes.SNACK,
    icon: <CupIcon />,
  },
];

const HealthyFilters: React.FC = () => {
  return (
    <ul className="flex justify-between py-6 max-w-[736px] mx-auto">
      {HEALTHY_FILTERS.map((filter) => (
        <li key={filter.id} className="flex w-[80px] md:w-[100px] lg:w-[136px]">
          <HealthyFilterItem {...filter} />
        </li>
      ))}
    </ul>
  );
};

export default HealthyFilters;
