import { atom } from 'recoil';

export interface MissionModalState {
  open: boolean;
  view: ModalView;
}

export type ModalView = 'default' | 'mission';

const defaultModalState: MissionModalState = {
  open: false,
  view: 'default',
};

export const MissionModalState = atom<MissionModalState>({
  key: 'MissionModalState',
  default: defaultModalState,
});
