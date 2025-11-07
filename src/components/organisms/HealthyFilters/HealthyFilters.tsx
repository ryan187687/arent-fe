import { CupIcon, KnifeIcon } from '@/components/atoms/Icons';
import { HealthyFilterBox } from '@/components/molecules/HealthyFilterBox';
import { EnumHealthyTypes, IHealthyFilter } from '@/types';

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
    <ul className="flex gap-[4rem] justify-center py-6">
      {HEALTHY_FILTERS.map((filter) => (
        <li key={filter.id}>
          <HealthyFilterBox {...filter} />
        </li>
      ))}
    </ul>
  );
};

export default HealthyFilters;
