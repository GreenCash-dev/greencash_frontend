import { MissionHeader, MissionModal, MissionScreenComponent } from '@src/components';
import React from 'react';

import * as S from './styled';

import MissionIllustration from '@assets/image 24.png';
import { useMediaQuery } from 'react-responsive';

export const MissionPage: React.FC = () => {
  const isResponsive = useMediaQuery({ minWidth: '768px' });
  console.log(isResponsive);
  return (
    <S.MissionContainer>
      <S.MissionHeaderContainer>
        <MissionHeader MissionText="숨은 미션들을 찾고 하나씩 성공해보세요!" />
      </S.MissionHeaderContainer>
      <MissionScreenComponent Illustration={MissionIllustration} isReponsive={isResponsive} />
    </S.MissionContainer>
  );
};
