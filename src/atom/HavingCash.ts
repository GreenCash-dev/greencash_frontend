import { atom } from 'recoil';

export interface HavingCashState {
  cash: number;
}

const CashState: HavingCashState = {
  cash: 0,
};

export const havingCashState = atom<HavingCashState>({
  key: 'YouHaveCash',
  default: CashState,
});
