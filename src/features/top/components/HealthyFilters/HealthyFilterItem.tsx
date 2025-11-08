'use client';
import { HexIcon } from '@/components/atoms/Icons';
import { APP_PAGES } from '@/config';
import type { EnumHealthyTypes, IHealthyFilter } from '@/types';
import { nextRedirect } from '@/utils';

const HealthyFilterItem: React.FC<IHealthyFilter> = ({ name, icon }) => {
  const handleFilter = (name: EnumHealthyTypes) => {
    nextRedirect(`${APP_PAGES.TOP}?type=${name}`);
  };
  return (
    <div
      className="flex relative aspect-square cursor-pointer hover:opacity-80 transition-opacity w-full"
      onClick={() => handleFilter(name)}
    >
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
