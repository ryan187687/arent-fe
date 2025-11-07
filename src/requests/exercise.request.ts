import { APP_API_URL } from '@/config';
import { ExerciseDTO } from '@/models/dto';
import type { ApiResponse } from '@/services/axios';
import { get } from '@/services/axios';

export const getExerciseRequest = (): ApiResponse<ExerciseDTO[]> => get(APP_API_URL.EXERCISE);
