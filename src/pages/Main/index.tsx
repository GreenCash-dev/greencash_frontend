import { CashOnHand, GuideLine, OnceCertification, StepCertification } from '@src/components';
import React from 'react';

import * as S from './styled';

export const MainPage: React.FC = () => {
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
    </S.MainScreen>
  );
};
