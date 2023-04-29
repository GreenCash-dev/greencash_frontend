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
import { useSeo } from '@src/hooks';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './styled';
import { useRecoilState } from 'recoil';
import { havingCashState } from '@src/atom';

export const MainPage: React.FC = () => {
  //https://www.crocus.co.kr/1582 css background gradation
  const navigate = useNavigate();
  const [havingCash, setHavingCash] = useRecoilState(havingCashState);
  useSeo('메인');

  return (
    <S.MainContainer>
      <Navbar />
      <S.Menus>
        <S.CashOnHandContainer>
          <S.CashOnHandPosition>
            <CashOnHand marginTop="-2.5px" marginRight="1px" AmountOfCash={havingCash.cash} />
          </S.CashOnHandPosition>
        </S.CashOnHandContainer>
        <S.OnecCertificationContainer onClick={() => navigate('/once')}>
          <OnceCertification />
        </S.OnecCertificationContainer>
        <S.StepCertificationContainer onClick={() => navigate('/step')}>
          <StepCertification StepOne={false} StepTwo={false} StepThree={false} StepFour={false} />
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
