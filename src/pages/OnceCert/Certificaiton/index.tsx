import { GobackIcon } from '@src/components';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './styled';

export const OnceCertificationPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <S.OnceCertificationBackground>
      <S.OnceCertScreen>
        <S.GoBackContainer>
          <GobackIcon MoveWhere={-1} NavigateFunc={navigate} />
          <S.OnceCertTitle>한번에 인증</S.OnceCertTitle>
        </S.GoBackContainer>
        <S.OnceCertDesc>
          페기물 내부와 외부가 잘 보이는
          <br /> 최대 5장의 사진을 찍어 업로드해주세요.
        </S.OnceCertDesc>
        <S.HowCanIContainer>
          <S.HowCanIHelpFont>분리배출을 방법이 헷갈린다면</S.HowCanIHelpFont>
          <S.GoToStepCert to="#">단계별 인증</S.GoToStepCert>
          <S.HowCanIHelpFont>하러가기</S.HowCanIHelpFont>
        </S.HowCanIContainer>
      </S.OnceCertScreen>
    </S.OnceCertificationBackground>
  );
};
