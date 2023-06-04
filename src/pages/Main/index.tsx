import React, { Suspense, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@src/firebase/clientApp';

import {
  Campaign,
  CashOnHand,
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
import { SearchPage } from '../Search';

interface UserInfo {
  cash: number;
  username: string;
}

interface cashType {
  cash: number;
}

export const MainPage: React.FC = () => {
  const navigate = useNavigate();
  const [stepOne, setStepOne] = useState<boolean>(false);
  const [stepTwo, setStepTwo] = useState<boolean>(false);
  const [stepThree, setStepThree] = useState<boolean>(false);
  const [stepFour, setStepFour] = useState<boolean>(false);
  const [level, setLevel] = useState<string>('');

  useSeo('메인');

  const [cash, setCash] = useState<cashType>();
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
  let GreenCashCalculate = 0;
  const [havingCash, setHavingCash] = useState<number>(0);
  const getCashs = useCallback(async () => {
    const data = await getDocs(greencashCollectionRef);
    const GreenCashData = data.docs.map((doc) => ({
      cash: doc.data().cash,
      username: doc.data().username,
    }));
    setUserInfo(GreenCashData);
    userInfo
      .filter((data) => data.username === username)
      .map((data2) => {
        GreenCashCalculate += data2.cash;
        setHavingCash(GreenCashCalculate);
        console.log(havingCash, 1);
      });
  }, []);
  useEffect(() => {
    console.log(userInfo, '?');
    getCashs();
    setUserName(localStorage.getItem('Authentication'));
  }, [GreenCashCalculate]);
  console.log(havingCash);
  return (
    <Suspense fallback={<SearchPage />}>
      <S.MainContainer>
        <Navbar />
        <S.Menus>
          <S.CashOnHandContainer>
            <S.CashOnHandPosition>
              <CashOnHand marginTop="-2.5px" marginRight="1px" AmountOfCash={havingCash} />
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
    </Suspense>
  );
};
