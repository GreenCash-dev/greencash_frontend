import React from 'react';

import * as S from './styled';

import CheckedBoxIcon from '@assets/CheckedBox.svg';
import NoneCheckedBoxIcon from '@assets/NoneCheck/NoneCheckedBox.svg';

interface pathProps {
  locationPath: string;
}

export const FooterMissionIcon: React.FC<pathProps> = ({ locationPath }) => {
  return (
    <>
      <S.MissionIcon src={locationPath === 'mission' ? CheckedBoxIcon : NoneCheckedBoxIcon} />
      <S.MissionText MissionTextColor={locationPath}>미션</S.MissionText>
    </>
  );
};
