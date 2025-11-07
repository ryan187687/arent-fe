import { RecommendedItem } from '@/components/molecules/RecommendedItem';
import { IRecommended } from '@/types/IColumn';

const RECOMMENDED_ITEMS: IRecommended[] = [
  {
    type: 'COLUMN',
    description: 'オススメ',
  },
  {
    type: 'DIET',
    description: 'ダイエット',
  },
  {
    type: 'BEAUTY',
    description: '美容',
  },
  {
    type: 'HEALTH',
    description: '健康',
  },
];

const RecommendedList: React.FC = async () => {
  return (
    <ul className="grid grid-cols-4 gap-8 py-[56px]">
      {RECOMMENDED_ITEMS.map((item) => (
        <li key={item.type}>
          <RecommendedItem {...item} />
        </li>
      ))}
    </ul>
  );
};

export default RecommendedList;
