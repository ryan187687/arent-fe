import { APP_ANCHOR_ID, APP_RECORD_CATEGORY_TYPE } from '@/config/constants';
import type { ExerciseDTO } from '@/models/dto';
import type { ExerciseEntity } from '@/models/entities';
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
    <div className="bg-gray-default px-4 py-2 lg:px-6 lg:py-4" id={APP_ANCHOR_ID.MY_EXERCISE}>
      <HeadingBlock title={APP_RECORD_CATEGORY_TYPE.MY_EXERCISE} date="2021.05.21" />
      <ul className="h-[210px] grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-2 overflow-y-auto pr-4 lg:pr-8 custom-scrollbar">
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
