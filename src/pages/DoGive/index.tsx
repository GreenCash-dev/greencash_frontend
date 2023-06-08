import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { addDoc, collection, getDocs } from 'firebase/firestore';

import * as S from './styled';
import { Button, DoGiveDesc, DoGiveInput, DoingGive, GobackIcon, GiveSuccessModal } from '@src/components';
import { DonatingCashState, SuccessModalState, havingCashState } from '@src/atom';
import { db } from '@src/firebase/clientApp';

import PlantIcon from '@assets/Plant.svg';
import UpArrowIcon from '@assets/UpArrow.svg';

export const DoGivePage: React.FC = () => {
  const [havingCash, setHavingCash] = useRecoilState(havingCashState);
  const setHavingCashState = useSetRecoilState(havingCashState);

  const [donatingCash, setDonatingCash] = useRecoilState(DonatingCashState);
  const setDonatingCashState = useSetRecoilState(DonatingCashState);

  const [giveCash, setGiveCash] = useState<string>('');
  const [modalState, setModalState] = useRecoilState(SuccessModalState);
  const setGiveModalState = useSetRecoilState(SuccessModalState);

  const navigate = useNavigate();
  const state = Number(giveCash);
  const greencashGiveCollectionRef = collection(db, process.env.REACT_APP_FIREBASE_CLOUD_NAME_GIVE);

  const getGiveCash = async () => {
    const data = await getDocs(greencashGiveCollectionRef);
    const GreenCashGiveData = data.docs.map((doc) => ({
      cash: doc.data().cash as string,
    }));
    return GreenCashGiveData.map((data) => Number(data.cash));
  };

  const resultGetGiveCash = () => {
    getGiveCash().then((arr) => {
      const giveSum = arr.reduce((a, b) => a + b);
      console.log(giveSum);
      setDonatingCashState((prev) => ({
        ...prev,
        bedonated: giveSum,
      }));
    });
  };

  const handleClose = () => {
    setModalState((prev) => ({
      ...prev,
      view: 'default',
      open: false,
    }));
  };

  const DoGiveOnClick = async () => {
    await addDoc(greencashGiveCollectionRef, { cash: giveCash });
    setHavingCashState((prev) => ({
      ...prev,
      cash: prev.cash - state,
    }));
    setGiveModalState((prev) => ({
      ...prev,
      view: 'success',
    }));
    resultGetGiveCash();
  };

  useEffect(() => {
    resultGetGiveCash();
  }, []);

  const isCashShort = havingCash.cash - state < 0 || state < 0 || !state;

  return (
    <S.DoGivePageContainer>
      <S.GoBackSection>
        <GobackIcon MoveWhere={'/'} NavigateFunc={navigate} />
      </S.GoBackSection>
      <S.DoGiveDescSection>
        <DoGiveDesc />
      </S.DoGiveDescSection>
      <S.DoGiveCashInputSection>
        <DoGiveInput setGiveCash={setGiveCash} />
        {giveCash === '' ? (
          <></>
        ) : isCashShort ? (
          <S.WarningText>캐시가 부족하거나 올바르지 않아요</S.WarningText>
        ) : (
          <></>
        )}
      </S.DoGiveCashInputSection>
      <S.DoGiveCashInfoSection>
        <DoingGive
          GivingCash={donatingCash.bedonated}
          PlantIconSrc={PlantIcon}
          OwnCash={havingCash.cash}
          UpArrowIconSrc={UpArrowIcon}
        />
      </S.DoGiveCashInfoSection>
      <S.DoGiveButtonSection>
        <Button
          CashIsMinus={isCashShort}
          OnClick={DoGiveOnClick}
          BackgroundColor="#B5E565"
          fontColor="#ffffff"
          fontSize="16px"
          DoText="기부하기"
        />
        {modalState.view === 'success' && <GiveSuccessModal CloseHandler={handleClose} />}
      </S.DoGiveButtonSection>
    </S.DoGivePageContainer>
  );
};
