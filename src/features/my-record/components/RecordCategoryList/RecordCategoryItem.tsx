import Link from 'next/link';

import { Image } from '@/components/atoms/Image';
import type { IRecordCategory } from '@/types/IRecord';

const RecordCategoryItem: React.FC<IRecordCategory> = ({ type, description, anchorId }) => {
  return (
    <div className="bg-yellow-default p-2 lg:p-6 aspect-square relative hover:opacity-80 transition-opacity">
      <Link href={`#${anchorId}`} className="absolute inset-0 w-full h-full z-10" />
      <div className="flex flex-col gap-1 lg:gap-2 items-center justify-center h-full relative">
        <div className="absolute inset-0 bg-black"></div>
        <Image
          src={`/assets/images/my-record/cate_${anchorId}.png`}
          alt={type}
          className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity"
          width={240}
          height={240}
        />
        <h4 className="text-[14px] lg:text-[25px] text-yellow-default relative font-inter">
          {type}
        </h4>
        <h5 className="text-[8px] lg:text-[14px] text-white p-1 lg:p-0 w-[5rem] lg:w-[10rem] lg:h-6 text-center bg-orange-default relative flex items-center justify-center">
          {description}
        </h5>
      </div>
    </div>
  );
};

export default RecordCategoryItem;
