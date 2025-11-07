import { APP_ANCHOR_ID } from '@/config';
import { DiaryDTO } from '@/models/dto';
import { DiaryEntity } from '@/models/entities';
import { getDiaryRequest } from '@/requests';
import { requestServer } from '@/services/requestServer';
import { isEmptyLodash } from '@/utils';
import { mapDiaryDtoToEntity } from '@/utils/mapper';
import DiaryItem from './DiaryItem';

const DiaryList: React.FC = async () => {
  const diary = await requestServer({
    apiRequest: getDiaryRequest(),
  });

  const diaryData: DiaryDTO[] = diary?.data || [];

  if (isEmptyLodash(diaryData)) {
    return null;
  }
  const diaryEntities: DiaryEntity[] = diaryData.map(mapDiaryDtoToEntity);
  return (
    <div id={APP_ANCHOR_ID.MY_DIARY}>
      <h2 className="text-[22px]">MY DIARY</h2>
      <ul className="grid grid-cols-4 gap-3">
        {diaryEntities.map((diaryEntityData) => (
          <li key={diaryEntityData.id}>
            <DiaryItem {...diaryEntityData} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DiaryList;
