import React from 'react';

import * as S from './styled';

export const DoCount: React.FC = () => {
  return (
    <S.DoCountContainer>
      <S.CountInfoContainer>
        <S.CountNumber>0회</S.CountNumber>
        <S.CountTitle>분리배출 횟수</S.CountTitle>
      </S.CountInfoContainer>
      <S.CenterDiv />
      <S.CountInfoContainer>
        <S.CountNumber>0회</S.CountNumber>
        <S.CountTitle>미션 달성 횟수</S.CountTitle>
      </S.CountInfoContainer>
    </S.DoCountContainer>
  );
};
