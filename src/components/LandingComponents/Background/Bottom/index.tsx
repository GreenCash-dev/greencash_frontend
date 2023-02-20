import React from 'react';

import * as S from './styled';

export const Back_Bottom: React.FC = () => {
  return (
    <S.Back_BottomContainer>
      <S.Back_Bottom_Left>
        분리배출 왜 필요한가? <br /> 분리배출, 과연 도움이 될까?
      </S.Back_Bottom_Left>
      <S.Back_Bottom_Right>
        경제적 측면, 환경적 측면에서 바라볼 때 비용을 엄청나게 많이 아낄 수 있고 분리배출은 환경을 돕는 방법들 중
        하나이다.
        <br />
        환경오염이 눈에 띄게 줄어드는 것은 아니짐나 이미 너무 많은 일회용품들이 생산되고 있으므로 최대한 분리배출을
        제대로 함으로써
        <br />
        재활용률을 최대화 하고 환경오염은 최소화 시키는 것이 목표다.
      </S.Back_Bottom_Right>
    </S.Back_BottomContainer>
  );
};
