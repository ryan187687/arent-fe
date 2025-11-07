'use client';
import { useAtom } from 'jotai';

import { modalsAtom } from '@/store/modalAtom';
import type { EnumModal } from '@/types';

const useModal = () => {
  const [modals, setModals] = useAtom(modalsAtom);

  const toggleModal = (key: EnumModal, forceState?: boolean) => {
    setModals((prev) => {
      const newState = typeof forceState === 'boolean' ? forceState : !prev[key];
      return { ...prev, [key]: newState };
    });
  };

  return {
    modals,
    toggleModal,
  };
};

export default useModal;
