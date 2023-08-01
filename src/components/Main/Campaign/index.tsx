import React from 'react';

import * as S from './styled';

interface CampaignProps {
  ImageSrc: string;
}

export const Campaign: React.FC<CampaignProps> = ({ ImageSrc }) => {
  return (
    <S.CampaignBox to="campaign">
      <S.CampaignContainer>
        <S.CampaignIcon src={ImageSrc} />
        <S.CampaignText>캠페인</S.CampaignText>
      </S.CampaignContainer>
    </S.CampaignBox>
  );
};
