import React from 'react';

import * as S from './styled';
import Gift from '@assets/Gift.svg';

export const Give: React.FC = () => {
  return (
    <S.GiveBox>
      <S.GivePosition>
        <S.GiveIcon src={Gift} />
        <S.GiveText>기부하기</S.GiveText>
      </S.GivePosition>
    </S.GiveBox>
  );
};
