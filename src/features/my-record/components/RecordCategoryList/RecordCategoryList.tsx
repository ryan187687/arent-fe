import {
  APP_ANCHOR_ID,
  APP_RECORD_CATEGORY_DESCRIPTION,
  APP_RECORD_CATEGORY_TYPE,
} from '@/config/constants';
import type { IRecordCategory } from '@/types/IRecord';

import RecordCategoryItem from './RecordCategoryItem';

const RECORD_CATEGORY_ITEMS: IRecordCategory[] = [
  {
    type: APP_RECORD_CATEGORY_TYPE.BODY_RECORD,
    description: APP_RECORD_CATEGORY_DESCRIPTION[APP_RECORD_CATEGORY_TYPE.BODY_RECORD],
    anchorId: APP_ANCHOR_ID.BODY_RECORD,
  },
  {
    type: APP_RECORD_CATEGORY_TYPE.MY_EXERCISE,
    description: APP_RECORD_CATEGORY_DESCRIPTION[APP_RECORD_CATEGORY_TYPE.MY_EXERCISE],
    anchorId: APP_ANCHOR_ID.MY_EXERCISE,
  },
  {
    type: APP_RECORD_CATEGORY_TYPE.MY_DIARY,
    description: APP_RECORD_CATEGORY_DESCRIPTION[APP_RECORD_CATEGORY_TYPE.MY_DIARY],
    anchorId: APP_ANCHOR_ID.MY_DIARY,
  },
];

const RecordCategoryList: React.FC = async () => {
  return (
    <ul className="grid grid-cols-3 gap-2 lg:gap-12">
      {RECORD_CATEGORY_ITEMS.map((item) => (
        <li key={item.type}>
          <RecordCategoryItem {...item} />
        </li>
      ))}
    </ul>
  );
};

export default RecordCategoryList;
