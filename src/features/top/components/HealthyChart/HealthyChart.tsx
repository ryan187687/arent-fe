import { ChartWrapper } from '@/components/atoms/Chart';
import { Image } from '@/components/atoms/Image';

const HealthyChart: React.FC = () => {
  return (
    <div className="flex">
      <div className="w-[40%] h-[316px]">
        <Image
          src="/assets/images/top/main_photo.png"
          alt="healthy chart"
          width={540}
          height={316}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-[60%]">
        <ChartWrapper />
      </div>
    </div>
  );
};

export default HealthyChart;
