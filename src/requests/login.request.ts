import { APP_API_URL } from '@/config';
import type { ApiResponse } from '@/services/axios';
import { post } from '@/services/axios';
import type { IAuthRequest, IAuthResponse } from '@/types';

export const postLoginRequest = (data: IAuthRequest): ApiResponse<IAuthResponse> =>
  post(APP_API_URL.LOGIN, data);
