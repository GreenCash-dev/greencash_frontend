import React, { MouseEventHandler } from 'react';
import * as S from './styled';

interface WhatDidToggleProps {
  toggleOnClick: MouseEventHandler;
  toggleCampaign: boolean;
  toggleAlways: boolean;
}

export const ToggleContentComponent: React.FC<WhatDidToggleProps> = ({
  toggleOnClick,
  toggleCampaign,
  toggleAlways,
}) => {
  return (
    <S.ToggleContentContainer>
      <S.ToggleMenuText onClick={toggleOnClick} toggled={toggleCampaign}>
        캠페인
      </S.ToggleMenuText>
      <S.verticalLine />
      <S.ToggleMenuText onClick={toggleOnClick} toggled={toggleAlways}>
        상시
      </S.ToggleMenuText>
    </S.ToggleContentContainer>
  );
};
