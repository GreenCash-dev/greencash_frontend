import { atom } from 'recoil';

export interface AuthStatusTypes {
  username: string;
}

const AuthStatus: AuthStatusTypes = {
  username: '',
};

export const AuthData = atom<AuthStatusTypes>({
  key: 'AuthStatus',
  default: AuthStatus,
});
