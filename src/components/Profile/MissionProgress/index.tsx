import React from 'react';

import * as S from './styled';

import CheckBoxPNG from '@assets/checkbox_4.png';

export const MissionProgress: React.FC = () => {
  return (
    <S.MissionProgessContainer>
      <S.MissionProgressTop>
        <S.MissionProgressCheckbox src={CheckBoxPNG as string} />
        <S.MissionProgressTitle>오늘 하루 미션 수행 정도</S.MissionProgressTitle>
      </S.MissionProgressTop>
      <S.MissionProgressBottom>
        <S.MissionProgress value={30} max={100}></S.MissionProgress>
        <S.MissionProgressPercent>{`${30}%`}</S.MissionProgressPercent>
      </S.MissionProgressBottom>
    </S.MissionProgessContainer>
  );
};
