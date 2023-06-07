import React from 'react';

import * as S from './styled';

interface ProfileProps {
  name: string;
  cash: number;
}

export const ProfileInfo: React.FC<ProfileProps> = ({ name, cash }) => {
  return (
    <S.InfoBox>
      <S.InfoPicture />
      <S.ProfileInfoContainer>
        <S.ProfileName>{name}</S.ProfileName>
        <S.HaveCashContainer>
          <S.CashOnHandIcon>
            <S.CashOnHandIconText marginRight="1px" marginTop="-2.5px">
              c
            </S.CashOnHandIconText>
          </S.CashOnHandIcon>
          <S.HaveCash>{`${cash} 캐시`}</S.HaveCash>
        </S.HaveCashContainer>
      </S.ProfileInfoContainer>
    </S.InfoBox>
  );
};
