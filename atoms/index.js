import { atom } from 'recoil';

export const toastStateAtom = atom({
  key: 'toastState',
  default: {
    isOpen: false,
    value: '',
  },
});

export const themeStateAtom = atom({
  key: 'themeState',
  default: '',
});

// legacy
export const currentProgramStateAtom = atom({
  key: 'currentProgramState',
  default: [],
});

export const selectedProgramStateAtom = atom({
  key: 'selectedProgramState',
  default: [],
});
