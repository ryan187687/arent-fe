import { ChartWrapper } from '@/components/atoms/Chart';
import { APP_ANCHOR_ID } from '@/config/constants';
import { HeadingBlock } from '../HeadingBlock';
import { PeriodType } from '../PeriodType';

const BodyRecord: React.FC = () => {
  return (
    <div className="bg-gray-default px-6 py-4" id={APP_ANCHOR_ID.BODY_RECORD}>
      <HeadingBlock title="BODY RECORD" date="2021.05.21" />
      <div className="h-[200px] px-4">
        <ChartWrapper className="p-0 bg-transparent" />
      </div>
      <PeriodType />
    </div>
  );
};

export default BodyRecord;
