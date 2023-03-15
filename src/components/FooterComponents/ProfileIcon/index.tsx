import React from 'react';

import * as S from './styled';

import ProfileIcon from '@assets/Profile.svg';
import NoneProfileIcon from '@assets/NoneCheck/NoneProfile.svg';

interface pathProps {
  locationPath: string;
}

export const FooterProfileIcon: React.FC<pathProps> = ({ locationPath }) => {
  return (
    <>
      <S.ProfileIcon src={locationPath === 'profile' ? ProfileIcon : NoneProfileIcon} />
      <S.ProfileText ProfileTextColor={locationPath}>프로필</S.ProfileText>
    </>
  );
};
