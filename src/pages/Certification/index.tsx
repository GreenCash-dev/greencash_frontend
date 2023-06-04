import { Button, CheckedPicture, GobackIcon, SuccessCertificationModal } from '@src/components';
import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';

import * as S from './styled';
import { certificationPictureState } from '@src/atom/CertificationPicture';
import { AuthData, SuccessModalState, havingCashState } from '@src/atom';
import Gift from '@assets/Gift.svg';
import ShoppingCartIcon from '@assets/ShoppingCart.svg';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { auth, db } from '@src/firebase/clientApp';
import { useAuthState } from 'react-firebase-hooks/auth';

export const OnceCertificationPage: React.FC = () => {
  const navigate = useNavigate();
  const [pic, setPic] = useRecoilState(certificationPictureState);
  const setCertificationPictureState = useSetRecoilState(certificationPictureState);
  const [modalState, setModalState] = useRecoilState(SuccessModalState);
  const setCertificationModalState = useSetRecoilState(SuccessModalState);
  const setHavingCashState = useSetRecoilState(havingCashState);
  const [havingCash, setHavingCash] = useRecoilState(havingCashState);
  const [sendCash, setSendCash] = useState(0);
  const [userName, setUserName] = useRecoilState(AuthData);

  useEffect(() => {
    if (pic.pictureFive !== '') {
      setSendCash(200);
    } else if (pic.pictureFour !== '') {
      setSendCash(160);
    } else if (pic.pictureThree !== '') {
      setSendCash(120);
    } else if (pic.pictureTwo !== '') {
      setSendCash(80);
    } else if (pic.pictureOne !== '') {
      setSendCash(40);
    }
  }, []);
  const greencashCollectionRef = collection(db, process.env.REACT_APP_FIREBASE_CLOUD_NAME);
  const [user, loading, error] = useAuthState(auth);

  const SuccessCertificationOnClick = async () => {
    await addDoc(greencashCollectionRef, { cash: sendCash, createdAt: Date.now(), username: user.uid });
    setCertificationPictureState((prev) => ({
      ...prev,
      pictureOne: '',
      pictureTwo: '',
      pictureThree: '',
      pictureFour: '',
      pictureFive: '',
    }));
    setHavingCashState((prev) => ({
      ...prev,
      cash: prev.cash + sendCash,
    }));
    setCertificationModalState((prev) => ({
      ...prev,
      view: 'success',
    }));
    console.log(havingCash);
  };
  const handleClose = () => {
    setModalState((prev) => ({
      ...prev,
      view: 'default',
      open: false,
    }));

    navigate('/');
  };
  const GoStoreOnClick = () => {
    alert('현재 개발중이에요!');
  };
  const GoDonateOnClick = () => {
    setModalState((prev) => ({
      ...prev,
      view: 'default',
      open: false,
    }));
    navigate('/donate');
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
        {pic.pictureOne === '' ? (
          <S.UndefinedPicture>
            <S.UndefinedPictureAlerm>촬영한 사진이 없어요🤔</S.UndefinedPictureAlerm>
          </S.UndefinedPicture>
        ) : (
          <S.CapturedImgsContainer>
            <S.CanSeeCapturedImgs>
              <S.CapturedImg src={pic.pictureOne} />
              <S.CapturedImg src={pic.pictureTwo} />
              <S.CapturedImg src={pic.pictureThree} />
              <S.CapturedImg src={pic.pictureFour} />
              <S.CapturedImg src={pic.pictureFive} />
            </S.CanSeeCapturedImgs>
          </S.CapturedImgsContainer>
        )}
        <S.CheckListContainer>
          <CheckedPicture NoneChecked={pic.pictureOne === ''} />
          <CheckedPicture NoneChecked={pic.pictureTwo === ''} />
          <CheckedPicture NoneChecked={pic.pictureThree === ''} />
          <CheckedPicture NoneChecked={pic.pictureFour === ''} />
          <CheckedPicture NoneChecked={pic.pictureFive === ''} />
        </S.CheckListContainer>
        <S.ButtonContainer>
          <Button
            CashIsMinus={pic.pictureOne === ''}
            BackgroundColor="#141C3D"
            fontSize={'15px'}
            fontColor={'#ffffff'}
            DoText="인증완료"
            OnClick={SuccessCertificationOnClick}
          />
        </S.ButtonContainer>
        {modalState.view === 'success' ? (
          <SuccessCertificationModal
            StoreIcon={ShoppingCartIcon}
            DoGiveIcon={Gift}
            GoHereStore={GoStoreOnClick}
            GoHereDonate={GoDonateOnClick}
            CloseHandler={handleClose}
            YouGetCashNow={sendCash}
          />
        ) : (
          <></>
        )}
      </S.OnceCertScreen>
    </S.OnceCertificationBackground>
  );
};
