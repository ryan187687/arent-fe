import dayjs from 'dayjs';

import type { ColumnDTO } from '@/models/dto';
import type { ColumnEntity } from '@/models/entities';

export const mapColumnDtoToEntity = (dto: ColumnDTO): ColumnEntity => ({
  id: dto.id,
  description: dto.description,
  date_time: dayjs(dto.created_at).format('YYYY.MM.DD HH:mm'),
  image: dto.image,
  tags: dto.tags.map((tag: string) => `#${tag}`).join(' '),
});
