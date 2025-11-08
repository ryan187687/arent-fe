import { HexIcon } from '@/components/atoms/Icons';
import type { IHealthyFilter } from '@/types';

const HealthyFilterItem: React.FC<IHealthyFilter> = ({ name, icon }) => {
  return (
    <div className="flex relative aspect-square cursor-pointer hover:opacity-80 transition-opacity w-full">
      <div className="w-full">
        <HexIcon />
      </div>
      <div className="absolute top-0 left-0 flex items-center flex-col justify-center h-full w-full">
        <div className="size-[26px] lg:size-auto">{icon}</div>
        <h2 className="text-white text-[14px] lg:text-[20px] font-inter">{name}</h2>
      </div>
    </div>
  );
};

export default HealthyFilterItem;
