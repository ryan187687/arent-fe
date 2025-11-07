import { APP_API_URL } from '@/config';
import { ColumnDTO } from '@/models/dto/column.dto';
import type { ApiResponse } from '@/services/axios';
import { get } from '@/services/axios';

export const getColumnRequest = (): ApiResponse<ColumnDTO[]> => get(APP_API_URL.COLUMN);
