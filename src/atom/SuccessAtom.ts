import { atom } from 'recoil';

export interface SuccessModalState {
  open: boolean;
  view: ModalView;
}

export type ModalView = 'default' | 'success';

const defaultModalState: SuccessModalState = {
  open: false,
  view: 'default',
};

export const SuccessModalState = atom<SuccessModalState>({
  key: 'SuccessModalState',
  default: defaultModalState,
});
