import { DiaryDTO } from '@/models/dto';
import { DiaryEntity } from '@/models/entities';
import dayjs from 'dayjs';

export const mapDiaryDtoToEntity = (dto: DiaryDTO): DiaryEntity => ({
  id: dto.id,
  title: dto.title,
  description: dto.description,
  date: dayjs(dto.created_at).format('YYYY.MM.DD'),
  time: dayjs(dto.created_at).format('HH:mm'),
});
