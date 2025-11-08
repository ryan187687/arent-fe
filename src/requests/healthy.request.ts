import { APP_API_URL } from '@/config';
import type { HealthyDTO } from '@/models';
import type { ApiResponse } from '@/services/axios';
import { get } from '@/services/axios';

export const getHealthyRequest = (): ApiResponse<HealthyDTO[]> => get(APP_API_URL.HEALTHY);
