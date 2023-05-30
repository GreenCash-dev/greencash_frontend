import React, { useEffect } from 'react';

import * as S from './styled';
import { Alarm, DoCount, MissionProgress, Navbar, ProfileInfo } from '@src/components';
import { ProfileData } from '@src/constants/profileData';

import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth } from '@src/firebase/clientApp';
import { useSetRecoilState } from 'recoil';
import { AuthData } from '@src/atom';

export const ProfilePage: React.FC = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
  const [user, loading, error] = useAuthState(auth);
  useEffect(() => {
    localStorage.getItem('Authentication') ? 0 : localStorage.setItem('Authentication', `${user.displayName}`);
  }, []);
  return (
    <S.ProfileContainer>
      <Navbar />
      <ProfileInfo name={user.displayName} />
      <MissionProgress />
      <DoCount />
      {ProfileData.map((data, idx) => {
        return <Alarm key={idx} title={data.title} text={data.text} />;
      })}
      {user ? <></> : <button onClick={() => signInWithGoogle()}>구글 로그인</button>}
    </S.ProfileContainer>
  );
};
