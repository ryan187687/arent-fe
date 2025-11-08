import { atom } from 'jotai';

import { EnumModal } from '@/types';

const initialState = {
  [EnumModal.NAVIGATION_MENU]: false,
};

export const modalAtom = atom<Record<EnumModal, boolean>>({ ...initialState });
