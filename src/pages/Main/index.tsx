import { CashOnHand, OnceCertification } from '@src/components';
import React from 'react';

import * as S from './styled';

export const MainPage: React.FC = () => {
  return (
    <>
      <S.CashOnHandContainer>
        <S.CashOnHandPosition>
          <CashOnHand AmountOfCash={0} />
        </S.CashOnHandPosition>
      </S.CashOnHandContainer>
      <S.OnecCertificationContainer>
        <OnceCertification />
      </S.OnecCertificationContainer>
    </>
  );
};
