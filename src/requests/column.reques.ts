import { APP_API_URL } from '@/config';
import type { ColumnDTO } from '@/models/dto';
import type { ApiResponse } from '@/services/axios';
import { get } from '@/services/axios';

export const getColumnRequest = (): ApiResponse<ColumnDTO[]> => get(APP_API_URL.COLUMN);
