import { ColumnDTO } from '@/models/dto';
import { ColumnEntity } from '@/models/entities';
import dayjs from 'dayjs';

export const mapColumnDtoToEntity = (dto: ColumnDTO): ColumnEntity => ({
  id: dto.id,
  description: dto.description,
  date_time: dayjs(dto.created_at).format('YYYY.MM.DD HH:mm'),
  image: dto.image,
  tags: dto.tags.map((tag: string) => `#${tag}`).join(' '),
});
