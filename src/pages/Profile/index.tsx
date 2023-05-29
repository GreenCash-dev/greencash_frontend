import React from 'react';

import * as S from './styled';
import { Alarm, DoCount, MissionProgress, Navbar, ProfileInfo } from '@src/components';
import { ProfileData } from '@src/constants/profileData';

export const ProfilePage: React.FC = () => {
  return (
    <S.ProfileContainer>
      <Navbar />
      <ProfileInfo />
      <MissionProgress />
      <DoCount />
      {ProfileData.map((data, idx) => {
        return <Alarm key={idx} title={data.title} text={data.text} />;
      })}
    </S.ProfileContainer>
  );
};
