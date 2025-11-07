import { APP_API_URL } from '@/config';
import { DiaryDTO } from '@/models/dto';
import type { ApiResponse } from '@/services/axios';
import { get } from '@/services/axios';

export const getDiaryRequest = (): ApiResponse<DiaryDTO[]> => get(APP_API_URL.DIARY);
