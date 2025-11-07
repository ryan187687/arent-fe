import axios from 'axios';

import { type IResponseCommon } from '@/types';

export type ApiResponse<T> = Promise<IResponseCommon<T>>;

import { ENV_CONFIG } from '@/config';

const api = axios.create({
  baseURL: `${ENV_CONFIG.NEXT_PUBLIC_API_URL || ''}/${ENV_CONFIG.NEXT_PUBLIC_API_VERSION || ''}`,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// Response interceptor
api.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export const get = async <T, P = Record<string, unknown>>(url: string, params?: P): Promise<T> => {
  const response = await api.get<T>(url, { params });
  return response.data;
};

export const post = async <T, D = Record<string, unknown>>(url: string, data?: D): Promise<T> => {
  const response = await api.post<T>(url, data);
  return response.data;
};

export const put = async <T, D = Record<string, unknown>>(url: string, data?: D): Promise<T> => {
  const response = await api.put<T>(url, data);
  return response.data;
};

export const del = async <T, P = Record<string, unknown>>(url: string, params?: P): Promise<T> => {
  const response = await api.delete<T>(url, { params });
  return response.data;
};
