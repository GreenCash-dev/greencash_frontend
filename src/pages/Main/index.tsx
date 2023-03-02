import { Campaign, CashOnHand, Give, GuideLine, OnceCertification, StepCertification, Store } from '@src/components';
import React from 'react';

import * as S from './styled';

export const MainPage: React.FC = () => {
  //https://www.crocus.co.kr/1582 css background gradation
  return (
    <S.MainScreen>
      <S.CashOnHandContainer>
        <S.CashOnHandPosition>
          <CashOnHand AmountOfCash={0} />
        </S.CashOnHandPosition>
      </S.CashOnHandContainer>
      <S.OnecCertificationContainer>
        <OnceCertification />
      </S.OnecCertificationContainer>
      <S.StepCertificationContainer>
        <StepCertification StepOne={false} StepTwo={false} StepThree={false} StepFour={false} />
      </S.StepCertificationContainer>
      <S.GuideLineContainer>
        <GuideLine />
      </S.GuideLineContainer>
      <S.InteractionContainer>
        <S.CampaignContainer>
          <Campaign />
        </S.CampaignContainer>
        <S.StoreGiveContainer>
          <S.StoreContainer>
            <Store />
          </S.StoreContainer>
          <S.DoGiveContainer>
            <Give />
          </S.DoGiveContainer>
        </S.StoreGiveContainer>
      </S.InteractionContainer>
    </S.MainScreen>
  );
};
