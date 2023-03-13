import { atom } from 'recoil';

export interface DonatingCashState {
  bedonated: number;
}

const DonateState: DonatingCashState = {
  bedonated: 0,
};

export const DonatingCashState = atom<DonatingCashState>({
  key: 'beDonated',
  default: DonateState,
});
