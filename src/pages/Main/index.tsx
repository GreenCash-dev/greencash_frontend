import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { collection, getDocs } from 'firebase/firestore';
import { auth, db } from '@src/firebase/clientApp';
import { useAuthState } from 'react-firebase-hooks/auth';

import {
  Campaign,
  CashOnHand,
  Footer,
  FooterMainIcon,
  FooterMissionIcon,
  FooterProfileIcon,
  FooterSearchIcon,
  Give,
  GuideLine,
  Navbar,
  OnceCertification,
  Question,
  StepCertification,
  Store,
} from '@src/components';

import * as S from './styled';
import { useSeo } from '@src/hooks';
import { havingCashState } from '@src/atom';

interface UserInfo {
  cash: number;
  username: string;
}

interface cashType {
  cash: number;
}

export const MainPage: React.FC = () => {
  const navigate = useNavigate();
  const havingCash = useRecoilValue(havingCashState);
  const [stepOne, setStepOne] = useState<boolean>(false);
  const [stepTwo, setStepTwo] = useState<boolean>(false);
  const [stepThree, setStepThree] = useState<boolean>(false);
  const [stepFour, setStepFour] = useState<boolean>(false);
  const [level, setLevel] = useState<string>('');

  const setHavingCashState = useSetRecoilState(havingCashState);

  useSeo('메인');

  const [cash, setCash] = useState<cashType[]>([]);
  const [userInfo, setUserInfo] = useState<UserInfo[]>([
    {
      cash: 0,
      username: '',
    },
  ]);
  const [username, setUserName] = useState<string>('');

  const greencashCollectionRef = collection(db, process.env.REACT_APP_FIREBASE_CLOUD_NAME);
  // eslint-disable-next-line prefer-const

  /**
   *  cash: doc.data().cash,
      username: doc.data().username,
   */
  const getCashs = useCallback(async () => {
    const data = await getDocs(greencashCollectionRef);
    const GreenCashData = data.docs.map((doc) => ({
      cash: doc.data().cash,
      username: doc.data().username,
    }));
    const OnlyCash = data.docs.map((doc) => doc.data().cash);
    setUserInfo(GreenCashData);
    console.log(OnlyCash[0], 'ㅎㅇ');
    setCash(OnlyCash);
  }, []);
  const filterData = useCallback(() => {
    console.log(0);
  }, []);
  // eslint-disable-next-line prefer-const
  let asd = 0;
  useEffect(() => {
    getCashs();
    filterData();
    setUserName(localStorage.getItem('Authentication'));
    cash.forEach((v) => {
      asd += v.cash;
    });
  }, []);
  console.log(userInfo, cash);
  return (
    <S.MainContainer>
      <Navbar />
      <S.Menus>
        <S.CashOnHandContainer>
          <S.CashOnHandPosition>
            <CashOnHand marginTop="-2.5px" marginRight="1px" AmountOfCash={asd} />
          </S.CashOnHandPosition>
        </S.CashOnHandContainer>
        <S.OnecCertificationContainer onClick={() => navigate('/once')}>
          <OnceCertification />
        </S.OnecCertificationContainer>
        <S.StepCertificationContainer onClick={() => navigate('/step/one')}>
          <StepCertification StepOne={stepOne} StepTwo={stepTwo} StepThree={stepThree} StepFour={stepFour} />
        </S.StepCertificationContainer>
        <S.GuideLineContainer>
          <GuideLine />
        </S.GuideLineContainer>
        <S.InteractionContainer>
          <S.CampaignContainer>
            <Campaign />
          </S.CampaignContainer>
          <S.StoreGiveContainer>
            <S.StoreContainer>
              <Store />
            </S.StoreContainer>
            <S.DoGiveContainer>
              <Give />
            </S.DoGiveContainer>
          </S.StoreGiveContainer>
        </S.InteractionContainer>
        <S.QAContainer>
          <Question />
        </S.QAContainer>
      </S.Menus>
    </S.MainContainer>
  );
};
