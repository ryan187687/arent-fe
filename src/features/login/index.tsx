'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { HealthyIcon } from '@/components/atoms/Icons';
import { APP_PAGES, APP_USER_DUMMY } from '@/config/constants';
import { useHookForm } from '@/hooks';
import { postLoginRequest } from '@/requests/login.request';
import { requestServer } from '@/services/requestServer';
import type { IAuthRequest, IAuthResponse } from '@/types';

const LoginSection: React.FC = () => {
  const router = useRouter();
  const { register, handleSubmit } = useHookForm<IAuthRequest>({
    defaultValues: {
      username: APP_USER_DUMMY.username,
      password: APP_USER_DUMMY.password,
    },
  });
  const [error, setError] = useState('');

  const onSubmit = async (data: IAuthRequest) => {
    const res = await requestServer<IAuthResponse>({
      apiRequest: postLoginRequest(data),
    });
    if (res.status === 'success' && res.data.token) {
      router.push(APP_PAGES.TOP);
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center h-full w-full bg-gray-100">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 shadow-lg w-80 space-y-4">
        <h1 className="flex justify-center">
          <HealthyIcon />
        </h1>
        <input className="w-full border p-2" placeholder="Username" {...register('username')} />
        <input
          className="w-full border p-2"
          placeholder="Password"
          type="password"
          {...register('password')}
        />
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <button
          type="submit"
          className="w-full bg-gray-default text-white p-2 hover:bg-gray-800 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginSection;
