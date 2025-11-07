import { IRecommended } from '@/types/IColumn';

const RecommendedItem: React.FC<IRecommended> = ({ type, description }) => {
  return (
    <div className="flex flex-col gap-2 bg-[#2E2E2E] py-6 px-2 items-center justify-center text-center">
      <h4 className="text-[22px] text-[#FFCC21]">
        RECOMMENDED
        <br />
        {type}
      </h4>
      <hr className="w-[56px] h-[1px] bg-white" />
      <h5 className="text-[18px] text-white">{description}</h5>
    </div>
  );
};

export default RecommendedItem;
