import React from 'react';

import * as S from './styled';

export const MainList: React.FC = () => {
  return (
    <S.MainListContainer>
      <S.MainList>Main</S.MainList>
      <S.MainSideList>
        한번에 인증
        <br />
        단계별 인증
        <br />
        가이드라인
        <br />
        캠페인
        <br />
        스토어
        <br />
        기부하기
      </S.MainSideList>
    </S.MainListContainer>
  );
};
