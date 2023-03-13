import { Button, DoGiveDesc, DoGiveInput, DoingGive, GobackIcon } from '@src/components';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './styled';
import PlantIcon from '@assets/Plant.svg';
import UpArrowIcon from '@assets/UpArrow.svg';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { DonatingCashState, SuccessModalState, havingCashState } from '@src/atom';
import { GiveSuccessModal } from '@src/components/Modal';

export const DoGivePage: React.FC = () => {
  const [havingCash, setHavingCash] = useRecoilState(havingCashState); // 보유중인 캐시
  const setHavingCashState = useSetRecoilState(havingCashState); //값 설정

  const [donatingCash, setDonatingCash] = useRecoilState(DonatingCashState);
  const setDonatingCashState = useSetRecoilState(DonatingCashState);
  const [giveCash, setGiveCash] = useState(''); //
  const setGiveModalState = useSetRecoilState(SuccessModalState);
  const [modalState, setModalState] = useRecoilState(SuccessModalState);
  const handleClose = () => {
    setModalState((prev) => ({
      ...prev,
      view: 'default',
      open: false,
    }));
  };
  const navigate = useNavigate();
  // eslint-disable-next-line prefer-const
  const state = Number(giveCash);
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
        {havingCash.cash - state < 0 && <S.WarningText>캐시가 부족해요.</S.WarningText>}
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
          CashIsMinus={havingCash.cash - state < 0 || state < 0 || !state}
          OnClick={() => {
            setDonatingCashState((prev) => ({
              ...prev,
              bedonated: prev.bedonated + state,
            }));
            setHavingCashState((prev) => ({
              ...prev,
              cash: prev.cash - state,
            }));
            setGiveModalState((prev) => ({
              ...prev,
              view: 'success',
            }));
          }}
          BackgroundColor="#B5E565"
          fontColor="#ffffff"
          fontSize="16px"
          DoText="기부하기"
        />
        {modalState.view === 'success' ? <GiveSuccessModal CloseHandler={handleClose} /> : null}
      </S.DoGiveButtonSection>
    </S.DoGivePageContainer>
  );
};
