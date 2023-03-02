import React from 'react';

import * as S from './styled';
import WhiteHeart from '../../../assets/WhiteHeart.svg';

export const Campaign: React.FC = () => {
  return (
    <S.CampaignBox>
      <S.CampaignContainer>
        <S.CampaignIcon src={WhiteHeart} />
        <S.CampaignText>캠페인</S.CampaignText>
      </S.CampaignContainer>
    </S.CampaignBox>
  );
};
