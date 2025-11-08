import type { IRecommended } from '@/types/IColumn';

const RecommendedItem: React.FC<IRecommended> = ({ type, description }) => {
  return (
    <div className="flex flex-col gap-2 bg-[#2E2E2E] py-6 px-2 items-center justify-center text-center">
      <h4 className="text-[14px] lg:text-[22px] text-yellow-default">
        RECOMMENDED
        <br />
        {type}
      </h4>
      <hr className="w-14 h-[1px] bg-white" />
      <h5 className="text-[12px] lg:text-[18px] text-white">{description}</h5>
    </div>
  );
};

export default RecommendedItem;
