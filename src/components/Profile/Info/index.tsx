import React from 'react';

import * as S from './styled';

interface ProfileProps {
  name: string;
}

export const ProfileInfo: React.FC<ProfileProps> = ({ name }) => {
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
          <S.HaveCash>{`${20000} 캐시`}</S.HaveCash>
        </S.HaveCashContainer>
      </S.ProfileInfoContainer>
    </S.InfoBox>
  );
};
