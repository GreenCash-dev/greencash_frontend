import React from 'react';

import * as S from './styled';

export const Loading: React.FC = () => {
  return (
    <S.Spinner viewBox="0 0 50 50">
      <S.Circle cx={25} cy={25} r={20} fill="none" strokeWidth={5}></S.Circle>
    </S.Spinner>
  );
};
