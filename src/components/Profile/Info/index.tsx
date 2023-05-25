import React from 'react';

import * as S from './styled';

export const ProfileInfo: React.FC = () => {
  return (
    <S.InfoBox>
      <S.InfoPicture />
      <S.ProfileInfoContainer>
        <S.ProfileName>홍길동</S.ProfileName>
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
