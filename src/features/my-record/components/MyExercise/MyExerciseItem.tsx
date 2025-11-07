import { ExerciseEntity } from '@/models/entities';

const MyExerciseItem: React.FC<ExerciseEntity> = ({ title, calories, time_minutes }) => {
  return (
    <div className="flex justify-between pb-0.5 border-b border-[#777777]">
      <div className="relative pl-4">
        <div className="absolute left-0 top-2 bg-white size-1.5 rounded-full"></div>
        <h4 className="text-[15px] text-white">{title}</h4>
        <p className="text-[15px] text-yellow-default">{calories}</p>
      </div>
      <p className="text-[18px] text-yellow-default">{time_minutes}</p>
    </div>
  );
};

export default MyExerciseItem;
