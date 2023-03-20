import { MissionHeader } from '@src/components';
import React from 'react';

import * as S from './styled';

export const MissionPage: React.FC = () => {
  return (
    <S.MissionContainer>
      <S.MissionHeaderContainer>
        <MissionHeader MissionText="숨은 미션들을 찾고 하나씩 성공해보세요!" />
      </S.MissionHeaderContainer>
      <S.Footer></S.Footer>
    </S.MissionContainer>
  );
};
