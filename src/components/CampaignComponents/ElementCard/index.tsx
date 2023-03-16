import React from 'react';

import * as S from './styled';

interface CardElementProps {
  PeriodData: string;
  CampaignName: string;
  CanGetCash: number;
}

export const CampaignCardElement: React.FC<CardElementProps> = ({ PeriodData, CampaignName, CanGetCash }) => {
  return (
    <S.CardElement>
      <S.CardElementImg />
      <S.CardElementBottomData>
        <S.CampaignInfoContainer>
          <S.CardElementCampaignTitle>{CampaignName}</S.CardElementCampaignTitle>
          <S.CampaignPeriodCashContainer>
            <S.PeriodText>{PeriodData}</S.PeriodText>
            <S.YouCanGetCash>
              <S.CashIcon>
                <S.CashIconC>c</S.CashIconC>
              </S.CashIcon>
              <S.CashValue>{CanGetCash}</S.CashValue>
            </S.YouCanGetCash>
          </S.CampaignPeriodCashContainer>
        </S.CampaignInfoContainer>
      </S.CardElementBottomData>
    </S.CardElement>
  );
};
