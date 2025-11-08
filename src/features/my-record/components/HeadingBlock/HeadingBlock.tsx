interface IHeadingBlockProps {
  title: string;
  date: string;
}

const HeadingBlock: React.FC<IHeadingBlockProps> = ({ title, date }) => {
  return (
    <div className="flex items-center text-white">
      <h4 className="text-[15px] w-28 lg:w-24 lg:pr-4 font-inter">{title}</h4>
      <p className="text-[18px] lg:text-[22px] font-inter">{date}</p>
    </div>
  );
};

export default HeadingBlock;
