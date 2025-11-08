import dayjs from 'dayjs';

import type { DiaryDTO } from '@/models/dto';
import type { DiaryEntity } from '@/models/entities';

export const mapDiaryDtoToEntity = (dto: DiaryDTO): DiaryEntity => ({
  id: dto.id,
  title: dto.title,
  description: dto.description,
  date: dayjs(dto.created_at).format('YYYY.MM.DD'),
  time: dayjs(dto.created_at).format('HH:mm'),
});
