import type { HealthyDTO, HealthyEntity } from '@/models';

export const mapHealthyDtoToEntity = (dto: HealthyDTO): HealthyEntity => ({
  id: dto.id,
  type: dto.type,
  date: new Date(dto.created_at)
    .toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
    })
    .replace('/', '.'),
  image: dto.image,
});
