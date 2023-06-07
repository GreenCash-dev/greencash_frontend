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
import { useSetRecoilState, useRecoilState } from 'recoil';

interface UserInfo {
  cash: number;
  username: string;
}

export const MainPage: React.FC = () => {
  const navigate = useNavigate();
  const [stepOne, setStepOne] = useState<boolean>(false);
  const [stepTwo, setStepTwo] = useState<boolean>(false);
  const [stepThree, setStepThree] = useState<boolean>(false);
  const [stepFour, setStepFour] = useState<boolean>(false);
  const [level, setLevel] = useState<string>('');
  const [shareHavingCash, setShareCash] = useRecoilState(havingCashState);

  useSeo('메인');

  const [userInfo, setUserInfo] = useState<UserInfo[]>([
    {
      cash: 0,
      username: '',
    },
  ]);
  const [username, setUserName] = useState<string>('');

  const [havingCash, setHavingCash] = useState<number>();
  const setCash = useSetRecoilState(havingCashState);
  const greencashCollectionRef = collection(db, process.env.REACT_APP_FIREBASE_CLOUD_NAME);
  useEffect(() => {
    const getCash = async () => {
      const data = await getDocs(greencashCollectionRef);
      const GreenCashData = data.docs.map((doc) => ({
        cash: doc.data().cash as number,
        username: doc.data().username as string,
      }));
      return GreenCashData.filter((user) => user.username === localStorage.getItem('Authentication')).map(
        (data) => data.cash
      );
    };
    // setUserName(localStorage.getItem('Authentication'));
    getCash().then((arr) => {
      const sum = arr.reduce((a, b) => a + b);
      setHavingCash(sum);
      setCash((prev) => ({
        ...prev,
        cash: sum,
      }));
    });
  }, []);
  return (
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
  );
};
