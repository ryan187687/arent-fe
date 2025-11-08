import { APP_ANCHOR_ID, APP_RECORD_CATEGORY_TYPE } from '@/config';
import type { DiaryDTO } from '@/models/dto';
import type { DiaryEntity } from '@/models/entities';
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
      <h2 className="text-[18px] lg:text-[22px] font-inter">{APP_RECORD_CATEGORY_TYPE.MY_DIARY}</h2>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
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
