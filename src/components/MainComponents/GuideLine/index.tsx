import React from 'react';

import * as S from './styled';

export const GuideLine: React.FC = () => (
  <S.GuideLineBox>
    <S.GuideLineIconContainer>
      <S.GuideLinePageIcon src="https://cdn.discordapp.com/attachments/1054718420651872266/1080439479891939338/Untitled-removebg-preview.png" />
    </S.GuideLineIconContainer>
    <S.GuideLineText>가이드라인</S.GuideLineText>
    <S.LinesContainer>
      <S.LineOneAndFive />
      <S.LineTwoAndFour />
      <S.LineThree />
      <S.LineTwoAndFour />
      <S.LineOneAndFive />
    </S.LinesContainer>
  </S.GuideLineBox>
);
