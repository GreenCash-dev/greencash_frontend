import { atom } from 'recoil';

export interface GiveModalState {
  open: boolean;
  view: ModalView;
}

export type ModalView = 'default' | 'success';

const defaultModalState: GiveModalState = {
  open: false,
  view: 'default',
};

export const giveModalState = atom<GiveModalState>({
  key: 'giveModalState',
  default: defaultModalState,
});
