import { Button, DoGiveDesc, DoGiveInput, DoingGive, GobackIcon } from '@src/components';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './styled';
import PlantIcon from '@assets/Plant.svg';
import UpArrowIcon from '@assets/UpArrow.svg';
import { useEffect } from 'react';

export const DoGivePage: React.FC = () => {
  const [haveCash, setHaveCash] = useState(1000); //보유중인 캐시
  const [doingGive, setDoingGive] = useState(0); //사람들이 기부중인 캐시
  const [giveCash, setGiveCash] = useState(''); //
  const [as, setAs] = useState(0);
  const navigate = useNavigate();
  // eslint-disable-next-line prefer-const
  const state = Number(giveCash);
  console.log(state);
  return (
    <S.DoGivePageContainer>
      <S.GoBackSection>
        <GobackIcon MoveWhere={-1} NavigateFunc={navigate} />
      </S.GoBackSection>
      <S.DoGiveDescSection>
        <DoGiveDesc />
      </S.DoGiveDescSection>
      <S.DoGiveCashInputSection>
        <DoGiveInput setGiveCash={setGiveCash} />
        {haveCash - state < 0 && <S.WarningText>캐시가 부족합니다.</S.WarningText>}
      </S.DoGiveCashInputSection>
      <S.DoGiveCashInfoSection>
        <DoingGive GivingCash={doingGive} PlantIconSrc={PlantIcon} OwnCash={haveCash} UpArrowIconSrc={UpArrowIcon} />
      </S.DoGiveCashInfoSection>
      <S.DoGiveButtonSection>
        <Button
          CashIsMinus={haveCash - state < 0}
          OnClick={() => {
            setDoingGive(Number(doingGive + state));
            setHaveCash(haveCash - state);
          }}
          BackgroundColor="#B5E565"
          fontColor="#ffffff"
          fontSize="16px"
          DoText="기부하기"
        />
      </S.DoGiveButtonSection>
    </S.DoGivePageContainer>
  );
};
