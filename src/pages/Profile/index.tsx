import React, { Suspense, useEffect, useState } from 'react';

import * as S from './styled';
import { Alarm, DoCount, MissionProgress, Navbar, ProfileInfo, LogoutButton, OAuth } from '@src/components';
import { ProfileData } from '@src/constants/profileData';

import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth } from '@src/firebase/clientApp';
import { signOut } from 'firebase/auth';

import GoogleLogo from '@assets/google.png';
import { havingCashState } from '@src/atom';
import { useRecoilState } from 'recoil';

export const ProfilePage: React.FC = () => {
  const [userId, setUserId] = useState<string>('');
  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
  const [user, loading, error] = useAuthState(auth);
  const [shareHavingCash, setShareCash] = useRecoilState(havingCashState);

  const LogoutOnClick = () => {
    signOut(auth);
    localStorage.removeItem('Authentication');
  };
  useEffect(() => {
    if (user) {
      setUserId(user.uid);
      localStorage.setItem('Authentication', `${user.uid}`);
    } else {
      console.log('not logged in');
    }
  }, [user]);
  return (
    <Suspense fallback={<div>asd</div>}>
      <S.ProfileContainer>
        <Navbar />
        {user ? (
          <ProfileInfo
            cash={shareHavingCash.cash}
            name={user ? (user.displayName.length > 5 ? user.displayName.substring(0, 5) : user.displayName) : ''}
          />
        ) : (
          <OAuth GoogleLogo={GoogleLogo as string} GoogleOAuthOnClick={() => signInWithGoogle()} />
        )}
        <S.ProfileFilter filterBoolean={user}>
          <MissionProgress />
          <DoCount />
          {ProfileData.map((data, idx) => {
            return <Alarm key={idx} title={data.title} text={data.text} />;
          })}
        </S.ProfileFilter>
        {user ? (
          <LogoutButton LogoutOnClick={LogoutOnClick} />
        ) : (
          <></>
          //<AuthButton AuthOnClick={() => signInWithGoogle()} AuthTitle={'구글 로그인'} />
        )}
      </S.ProfileContainer>
    </Suspense>
  );
};
