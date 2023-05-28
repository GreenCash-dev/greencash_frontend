import React from 'react';

import * as S from './styled';
import { Alarm, DoCount, MissionProgress, Navbar, ProfileInfo } from '@src/components';

export const ProfilePage: React.FC = () => {
  return (
    <S.ProfileContainer>
      <Navbar />
      <ProfileInfo />
      <MissionProgress />
      <DoCount />
      <Alarm />
    </S.ProfileContainer>
  );
};
