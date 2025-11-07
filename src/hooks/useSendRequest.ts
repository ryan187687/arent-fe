'use client';
import type { AxiosError, AxiosResponse } from 'axios';
import { useState } from 'react';

import type { ApiResponse } from '@/services/axios';
import type { IResponseStructure } from '@/types';

type SendRequestFunctionProps<T> = {
  apiRequest: ApiResponse<T>;
  onSuccess?: (res: AxiosResponse<IResponseStructure<T>, unknown>) => void;
  onError?: (error: AxiosError) => void;
  onFinally?: () => void;
};

const useSendRequest = () => {
  const [requestLoading, setRequesetLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  function sendRequest<T>({
    apiRequest,
    onSuccess,
    onError,
    onFinally,
  }: SendRequestFunctionProps<T>): void {
    if (requestLoading) return;
    setRequesetLoading(true);
    setErrorMessage(undefined);
    apiRequest
      .then((res) => {
        // if (onSuccess) {
        //   onSuccess(res);
        // }
      })
      .catch((error) => {
        setErrorMessage(error.message || 'There was an error happened');
        if (onError) {
          setTimeout(() => {
            onError(error);
          }, 1000);
        }
      })
      .finally(() => {
        setRequesetLoading(false);
        if (onFinally) {
          onFinally();
        }
      });
  }

  return { requestLoading, sendRequest, errorMessage };
};
export default useSendRequest;
