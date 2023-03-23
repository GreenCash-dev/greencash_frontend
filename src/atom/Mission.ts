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

//data send to Modal
export interface MissionDataState {
  ModalTitle: string;
  ModalTitleDesc: string;
  ModalGetCash: number;
  ModalInfoTitle: string;
  ModalInfoDesc: string;
}

const DataState: MissionDataState = {
  ModalTitle: '',
  ModalTitleDesc: '',
  ModalGetCash: 0,
  ModalInfoTitle: '',
  ModalInfoDesc: '',
};

export const missionDataState = atom<MissionDataState>({
  key: 'missionData',
  default: DataState,
});
