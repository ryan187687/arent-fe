import type { AxiosError } from 'axios';

import type { ApiResponse } from '@/services/axios';
import type { IResponseCommon } from '@/types';

type requestServerFunctionProps<T> = {
  apiRequest: ApiResponse<T>;
  onSuccess?: (res: IResponseCommon<T>) => void;
  onError?: (error: AxiosError) => void;
  onFinally?: () => void;
};

export const requestServer = async <T>({
  apiRequest,
  onSuccess,
  onError,
  onFinally,
}: requestServerFunctionProps<T>): Promise<IResponseCommon<T>> => {
  try {
    const res = await apiRequest;
    if (onSuccess) {
      onSuccess(res);
    }
    return res;
  } catch (error) {
    console.error(error);
    if (onError) {
      onError(error as AxiosError);
    }
    return {
      data: [] as T,
      status: 'error',
      message: 'Error',
      meta: { total_pages: 0, total_items: 0, page: 0 },
    };
  } finally {
    if (onFinally) {
      onFinally();
    }
  }
};
