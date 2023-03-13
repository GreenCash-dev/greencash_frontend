import { Button, GobackIcon } from '@src/components';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import * as S from './styled';
import { certificationPictureState } from '@src/atom/CertificationPicture';

export const OnceCertificationPage: React.FC = () => {
  const navigate = useNavigate();
  const [pic, setPic] = useRecoilState(certificationPictureState);
  const Modal = () => {
    console.log('인증완료를 누르면 모달창 하나를 띄운다');
  };
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
        <S.CapturedImgsContainer>
          <S.CanSeeCapturedImgs>
            <S.CapturedImg src={pic.pictureOne} />
            <S.CapturedImg src={pic.pictureTwo} />
            <S.CapturedImg src={pic.pictureThree} />
            <S.CapturedImg src={pic.pictureFour} />
            <S.CapturedImg src={pic.pictureFive} />
          </S.CanSeeCapturedImgs>
        </S.CapturedImgsContainer>
        <S.ButtonContainer>
          <Button
            CashIsMinus={false}
            BackgroundColor="#141C3D"
            fontSize={'15px'}
            fontColor={'#ffffff'}
            DoText="인증완료"
            OnClick={Modal}
          />
        </S.ButtonContainer>
      </S.OnceCertScreen>
    </S.OnceCertificationBackground>
  );
};
