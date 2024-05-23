import { atom } from 'recoil';

export const toastStateAtom = atom({
  key: 'toastState',
  default: {
    isOpen: false,
    value: '',
  },
});

export const isOpenSnsFrameStateAtom = atom({
  key: 'isOpenSnsFrameState',
  default: true,
});
