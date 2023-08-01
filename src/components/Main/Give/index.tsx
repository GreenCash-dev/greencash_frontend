import React from 'react';

import * as S from './styled';

interface GiveProps {
  ImageSrc: string;
}

export const Give: React.FC<GiveProps> = ({ ImageSrc }) => {
  return (
    <S.GiveBox to="donate">
      <S.GivePosition>
        <S.GiveIcon src={ImageSrc} />
        <S.GiveText>기부하기</S.GiveText>
      </S.GivePosition>
    </S.GiveBox>
  );
};
