import { Image } from '@/components/atoms/Image';
import { IRecordCategory } from '@/types/IRecord';
import Link from 'next/link';

const RecordCategoryItem: React.FC<IRecordCategory> = ({ type, description, anchorId }) => {
  return (
    <div className="bg-yellow-default p-6 aspect-square relative hover:opacity-80 transition-opacity">
      <Link href={`#${anchorId}`} className="absolute inset-0 w-full h-full z-10" />
      <div className="flex flex-col gap-2 items-center justify-center h-full relative">
        <div className="absolute inset-0 bg-black"></div>
        <Image
          src={`/assets/images/my-record/cate_${anchorId}.png`}
          alt={type}
          className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity"
          width={240}
          height={240}
        />
        <h4 className="text-[25px] text-yellow-default relative">{type}</h4>
        <h5 className="text-[14px] text-white w-[10rem] h-6 text-center bg-orange-default relative">
          {description}
        </h5>
      </div>
    </div>
  );
};

export default RecordCategoryItem;
