import { Image } from '@/components/atoms/Image';
import Label from '@/components/atoms/Label/Label';
import type { ColumnEntity } from '@/models/entities';

const ColumnItem: React.FC<ColumnEntity> = ({ image, date_time, description, tags }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="w-full aspect-[234/145] relative">
        <Image
          src={image}
          alt={description}
          width={234}
          height={145}
          className="w-full h-full object-cover"
        />
        <Label label={`${date_time}`} size="sm" />
      </div>
      <h4 className="text-[15px] font-inter">{description}</h4>
      <h5 className="text-[12px] text-[#FF963C]">{tags}</h5>
    </div>
  );
};

export default ColumnItem;
