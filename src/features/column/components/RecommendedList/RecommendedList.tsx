import { APP_RECOMMENDED_DESCRIPTION, APP_RECOMMENDED_TYPE } from '@/config/constants';
import { IRecommended } from '@/types/IColumn';
import RecommendedItem from './RecommendedItem';

const RECOMMENDED_ITEMS: IRecommended[] = [
  {
    type: APP_RECOMMENDED_TYPE.COLUMN,
    description: APP_RECOMMENDED_DESCRIPTION[APP_RECOMMENDED_TYPE.COLUMN],
  },
  {
    type: APP_RECOMMENDED_TYPE.DIET,
    description: APP_RECOMMENDED_DESCRIPTION[APP_RECOMMENDED_TYPE.DIET],
  },
  {
    type: APP_RECOMMENDED_TYPE.BEAUTY,
    description: APP_RECOMMENDED_DESCRIPTION[APP_RECOMMENDED_TYPE.BEAUTY],
  },
  {
    type: APP_RECOMMENDED_TYPE.HEALTH,
    description: APP_RECOMMENDED_DESCRIPTION[APP_RECOMMENDED_TYPE.HEALTH],
  },
];

const RecommendedList: React.FC = async () => {
  return (
    <ul className="grid grid-cols-4 gap-8 py-14">
      {RECOMMENDED_ITEMS.map((item) => (
        <li key={item.type}>
          <RecommendedItem {...item} />
        </li>
      ))}
    </ul>
  );
};

export default RecommendedList;
