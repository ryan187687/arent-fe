'use client';
import { useAtom } from 'jotai';

import { modalAtom } from '@/store/modalAtom';
import type { EnumModal } from '@/types';
const useModal = () => {
  const [modal, setModal] = useAtom(modalAtom);

  const toggleModal = (key: EnumModal, forceState?: boolean) => {
    setModal((prev: Record<EnumModal, boolean>) => {
      const newState = typeof forceState === 'boolean' ? forceState : !prev[key];
      return { ...prev, [key]: newState };
    });
  };

  return {
    modal,
    toggleModal,
  };
};

export default useModal;
