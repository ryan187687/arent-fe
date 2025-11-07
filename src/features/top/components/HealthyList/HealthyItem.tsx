import { Image } from '@/components/atoms/Image';
import Label from '@/components/atoms/Label/Label';
import { HealthyEntity } from '@/models';

const HealthyItem: React.FC<HealthyEntity> = ({ image, type, date }) => {
  return (
    <div className="w-full aspect-square relative">
      <Image
        src={image}
        alt={date}
        width={234}
        height={234}
        className="w-full h-full object-cover"
      />
      <Label label={`${date}.${type}`} />
    </div>
  );
};

export default HealthyItem;
