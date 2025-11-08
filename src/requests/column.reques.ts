import { APP_API_URL } from '@/config';
import type { ColumnDTO } from '@/models/dto';
import type { ApiResponse } from '@/services/axios';
import { get } from '@/services/axios';
import type { IRequest } from '@/types';

export const getColumnRequest = (params?: IRequest): ApiResponse<ColumnDTO[]> =>
  get(APP_API_URL.COLUMN, params);
