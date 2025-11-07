'use client';
import { useAtomValue } from 'jotai';
import { useRouter } from 'next/navigation';

import { pathTypeAtom } from '@/store/authAtom';
const useNavigation = () => {
  const router = useRouter();
  const pathType = useAtomValue(pathTypeAtom);

  const handleNavigate = (url: string) => {
    const cleanUrl = url.startsWith('/') ? url : `/${url}`;
    const redirectUrl = `/${pathType}${cleanUrl}`;
    router.push(redirectUrl);
  };

  return { handleNavigate };
};

export default useNavigation;
