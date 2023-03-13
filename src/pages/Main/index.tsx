import {
  Campaign,
  CashOnHand,
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
import { useTitle } from '@src/hooks';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import * as S from './styled';
import { useRecoilState } from 'recoil';
import { havingCashState } from '@src/atom';

export const MainPage: React.FC = () => {
  //https://www.crocus.co.kr/1582 css background gradation
  const location = useLocation();
  const navigate = useNavigate();
  const [locationPathName, setLocationPath] = useState(location.pathname.split('/')[0]);
  const [havingCash, setHavingCash] = useRecoilState(havingCashState);
  useTitle('메인');
  return (
    <>
      <Navbar />
      <S.Menus>
        <S.CashOnHandContainer>
          <S.CashOnHandPosition>
            <CashOnHand AmountOfCash={havingCash.cash} />
          </S.CashOnHandPosition>
        </S.CashOnHandContainer>
        <S.OnecCertificationContainer onClick={() => navigate('/once')}>
          <OnceCertification />
        </S.OnecCertificationContainer>
        <S.StepCertificationContainer>
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
      <S.FooterBox>
        <S.FooterContainer>
          <S.FooterMainIconContainer>
            <FooterMainIcon locationPath={locationPathName} />
          </S.FooterMainIconContainer>
          <S.FooterMissionIconContainer>
            <FooterMissionIcon locationPath={locationPathName} />
          </S.FooterMissionIconContainer>
          <S.FooterSearchIconContainer>
            <FooterSearchIcon locationPath={locationPathName} />
          </S.FooterSearchIconContainer>
          <S.FooterProfileIconContainer>
            <FooterProfileIcon locationPath={locationPathName} />
          </S.FooterProfileIconContainer>
        </S.FooterContainer>
      </S.FooterBox>
    </>
  );
};
