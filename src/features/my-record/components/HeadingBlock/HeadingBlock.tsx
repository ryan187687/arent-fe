interface IHeadingBlockProps {
  title: string;
  date: string;
}

const HeadingBlock: React.FC<IHeadingBlockProps> = ({ title, date }) => {
  return (
    <div className="flex items-center text-white">
      <h4 className="text-[15px] w-24 pr-4">{title}</h4>
      <p className="text-[22px]">{date}</p>
    </div>
  );
};

export default HeadingBlock;
