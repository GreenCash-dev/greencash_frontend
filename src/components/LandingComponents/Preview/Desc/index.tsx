import React from 'react';

import * as S from './styled';

export const PreviewDesc: React.FC = () => {
  return (
    <S.PreviewDescTextContainer>
      <S.PreviewDescTextOneLine>
        <S.PreviewDescPointText>그린캐시</S.PreviewDescPointText>
        <S.PreviewDescText>는 사용자들이 분리배출을 쉽게 할 수 있도록 돕는다.</S.PreviewDescText>
      </S.PreviewDescTextOneLine>
      <S.PreviewDescText>
        분리배출 인증과 미션 등 다양한 방법을 통해 캐시를 얻을 수 있으며
        <br />
        이는 사용자들의 일상 속 친환경에 대한 동기부여와 습관을 돋우는 역할을 한다.
      </S.PreviewDescText>
    </S.PreviewDescTextContainer>
  );
};
