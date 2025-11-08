import { ChartWrapper } from '@/components/atoms/Chart';
import { APP_ANCHOR_ID, APP_RECORD_CATEGORY_TYPE } from '@/config/constants';

import { HeadingBlock } from '../HeadingBlock';
import { PeriodType } from '../PeriodType';

const BodyRecord: React.FC = () => {
  return (
    <div className="bg-gray-default px-4 py-2 lg:px-6 lg:py-4" id={APP_ANCHOR_ID.BODY_RECORD}>
      <HeadingBlock title={APP_RECORD_CATEGORY_TYPE.BODY_RECORD} date="2021.05.21" />
      <div className="h-[150px] lg:h-[200px] lg:px-4">
        <ChartWrapper className="p-0 bg-transparent" />
      </div>
      <PeriodType />
    </div>
  );
};

export default BodyRecord;
