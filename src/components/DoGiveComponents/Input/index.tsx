import React from 'react';

import * as S from './styled';

export const DoGiveInput: React.FC = () => {
  return (
    <S.DoGiveInputContainer>
      <S.DoGiveInputElement placeholder="캐시를 입력하세요" />
    </S.DoGiveInputContainer>
  );
};
