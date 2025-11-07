import { APP_ANCHOR_ID } from '@/config/constants';
import { ExerciseDTO } from '@/models/dto';
import { ExerciseEntity } from '@/models/entities';
import { getExerciseRequest } from '@/requests';
import { requestServer } from '@/services/requestServer';
import { isEmptyLodash } from '@/utils';
import { mapExerciseDtoToEntity } from '@/utils/mapper';
import { HeadingBlock } from '../HeadingBlock';
import MyExerciseItem from './MyExerciseItem';

const MyExercise: React.FC = async () => {
  const exercise = await requestServer({
    apiRequest: getExerciseRequest(),
  });
  const exerciseData: ExerciseDTO[] = exercise?.data || [];
  if (isEmptyLodash(exerciseData)) {
    return null;
  }
  const exerciseEntities: ExerciseEntity[] = exerciseData.map(mapExerciseDtoToEntity);
  return (
    <div className="bg-gray-default px-6 py-4" id={APP_ANCHOR_ID.MY_EXERCISE}>
      <HeadingBlock title="MY EXERCISE" date="2021.05.21" />
      <ul className="h-[210px] grid grid-cols-2 gap-x-10 gap-y-2 overflow-y-auto pr-8 custom-scrollbar">
        {exerciseEntities.map((exerciseEntityData) => (
          <li key={exerciseEntityData.id}>
            <MyExerciseItem {...exerciseEntityData} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyExercise;
