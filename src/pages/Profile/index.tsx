import React, { Suspense, useEffect, useState } from 'react';

import * as S from './styled';
import { Alarm, DoCount, MissionProgress, Navbar, ProfileInfo, LogoutButton, OAuth } from '@src/components';
import { ProfileData } from '@src/constants/profileData';

import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth } from '@src/firebase/clientApp';
import { signOut } from 'firebase/auth';

import GoogleLogo from '@assets/google.png';

export const ProfilePage: React.FC = () => {
  const [userId, setUserId] = useState<string>('');
  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
  const [user, loading, error] = useAuthState(auth);
  const LogoutOnClick = () => {
    signOut(auth);
  };
  useEffect(() => {
    if (user) {
      setUserId(user.uid);
      localStorage.getItem('Authentication') ? 0 : localStorage.setItem('Authentication', `${userId}`);
    } else {
      console.log('not logged in');
    }
  }, []);
  return (
    <Suspense fallback={<div>asd</div>}>
      <S.ProfileContainer>
        <Navbar />
        {user ? (
          <ProfileInfo name={user ? user.displayName : ''} />
        ) : (
          <OAuth GoogleLogo={GoogleLogo} GoogleOAuthOnClick={() => signInWithGoogle()} />
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
