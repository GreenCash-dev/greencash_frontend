import { GobackIcon } from '@src/components';
import { StepTitlePoint } from '@src/components/StepCertificationComponent';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styled';

export const StepCertificationPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <S.StepCertification>
      <S.StepCertificationScreen>
        <S.GoBackContainer>
          <GobackIcon MoveWhere={-1} NavigateFunc={navigate} />
          <S.StepCertificationTitle>단계별 인증</S.StepCertificationTitle>
        </S.GoBackContainer>
        <StepTitlePoint StepNumber={1} />
        <S.StepTitleContainer>asd</S.StepTitleContainer>
      </S.StepCertificationScreen>
    </S.StepCertification>
  );
};
