import { HexIcon } from '@/components/atoms/Icons';
import { IHealthyFilter } from '@/types';

const HealthyFilterBox: React.FC<IHealthyFilter> = ({ name, icon }) => {
  return (
    <div className="flex relative aspect-square w-[136px] cursor-pointer hover:opacity-80 transition-opacity">
      <HexIcon />
      <div className="absolute top-0 left-0 flex items-center flex-col justify-center h-full w-full">
        {icon}
        <h2 className="text-white text-[20px]">{name}</h2>
      </div>
    </div>
  );
};

export default HealthyFilterBox;
