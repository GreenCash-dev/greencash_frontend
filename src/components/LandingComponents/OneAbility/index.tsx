import React from 'react';

import * as S from './styled';

export const OneAbility: React.FC = () => {
  return (
    <S.AbilityContainer>
      <S.AbilityTitle>한번에 인증</S.AbilityTitle>
      <S.AbilityDesc>
        버리고자 하는 폐기물들을 한번에 찍어 <br />
        업로드만 하면 인증 되는 방식.
      </S.AbilityDesc>
    </S.AbilityContainer>
  );
};
