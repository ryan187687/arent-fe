import type { ExerciseDTO } from '@/models/dto';
import type { ExerciseEntity } from '@/models/entities';

export const mapExerciseDtoToEntity = (dto: ExerciseDTO): ExerciseEntity => ({
  id: dto.id,
  title: dto.title,
  calories: `${dto.calories}kcal`,
  time_minutes: `${dto.time_minutes} min`,
});
