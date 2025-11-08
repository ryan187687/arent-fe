import type { DiaryEntity } from '@/models/entities';

const DiaryItem: React.FC<DiaryEntity> = ({ title, description, date, time }) => {
  return (
    <div className="flex flex-col gap-2 border-2 border-[#707070] p-3 pb-5 lg:p-4 lg:pb-7">
      <h4 className="text-[18px] font-inter">
        {date}
        <br />
        {time}
      </h4>
      <div className="text-[12px]">
        <h5>{title}</h5>
        <p className="line-clamp-5">{description}</p>
      </div>
    </div>
  );
};

export default DiaryItem;
