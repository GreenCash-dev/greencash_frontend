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
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import * as S from './styled';
import { useRecoilState } from 'recoil';
import { havingCashState } from '@src/atom';

//icons
import FourSquaresIcon from '@assets/FourSquares.svg';
import NoneFourSquaresIcon from '@assets/NoneCheck/NoneFourSquares.svg';

export const MainPage: React.FC = () => {
  //https://www.crocus.co.kr/1582 css background gradation
  const location = useLocation();
  const navigate = useNavigate();
  const [locationPathName, setLocationPath] = useState(location.pathname.split('/')[0]);
  const [havingCash, setHavingCash] = useRecoilState(havingCashState);
  useSeo('메인');
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
        <Footer
          locationPathName={locationPathName}
          MainIconPath={FourSquaresIcon}
          NoneMainIconPath={NoneFourSquaresIcon}
        />
      </S.Menus>
    </>
  );
};
