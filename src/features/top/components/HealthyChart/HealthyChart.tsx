import { ChartWrapper } from '@/components/atoms/Chart';
import { Image } from '@/components/atoms/Image';

import { CircularProgress } from '../CircularProgress';

const HealthyChart: React.FC = () => {
  return (
    <div className="lg:flex">
      <div className="lg:w-[40%] h-[316px] hidden lg:block relative">
        <Image
          src="/assets/images/top/main_photo.jpg"
          alt="healthy chart"
          width={540}
          height={316}
          className="w-full h-full object-cover"
        />
        <CircularProgress percent={75} date="05/21" />
      </div>
      <div className="lg:w-[60%] h-[200px] lg:h-auto">
        <ChartWrapper />
      </div>
    </div>
  );
};

export default HealthyChart;
