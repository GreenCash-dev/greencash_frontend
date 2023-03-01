import React from 'react';

import * as S from './styled';

interface StepCertificationStateProps {
  StepOne: boolean;
  StepTwo: boolean;
  StepThree: boolean;
  StepFour: boolean;
}

export const StepCertification: React.FC<StepCertificationStateProps> = ({ StepOne, StepTwo, StepThree, StepFour }) => {
  return (
    <S.StepCertificationBox>
      <S.CertificationListContainer>
        <S.CertificationListOneLine>
          <S.CertificationDot />
          <S.CertificationVertical />
        </S.CertificationListOneLine>
        <S.CertificationListOneLine>
          <S.CertificationDot />
          <S.CertificationVertical />
        </S.CertificationListOneLine>
        <S.CertificationListOneLine>
          <S.CertificationDot />
          <S.CertificationVertical />
        </S.CertificationListOneLine>
      </S.CertificationListContainer>
      <S.CertificationText>단계별 인증</S.CertificationText>
      <S.StateContainer>
        <S.StateDot state={false} success={StepOne} />
        <S.StateDot state={false} success={StepTwo} />
        <S.StateDot state={false} success={StepThree} />
        <S.StateDot state={false} success={StepFour} />
      </S.StateContainer>
    </S.StepCertificationBox>
  );
};
