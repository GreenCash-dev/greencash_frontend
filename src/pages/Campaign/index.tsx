import React, { useState } from 'react';

import * as S from './styled';
import { useNavigate } from 'react-router';
import { GobackIcon } from '@src/components/common';
import { CampaignCardElement, CampaignsDesc, ToggleContentComponent } from '@src/components/Campaign';

export const CampaignPage: React.FC = () => {
  const navigate = useNavigate();
  const [toggleCampaign, setToggleCampaign] = useState<boolean>(true);
  const [toggleAlways, setToggleAlways] = useState<boolean>(false);
  const toggleOnClick = () => {
    setToggleCampaign(!toggleCampaign);
    setToggleAlways(!toggleAlways);
  };
  return (
    <S.CampaignContainer>
      <S.GoBackSection>
        <GobackIcon MoveWhere={-1} NavigateFunc={navigate} />
        <S.CampaignTitle>캠페인</S.CampaignTitle>
      </S.GoBackSection>
      <S.ChooseMenuSection>
        <ToggleContentComponent
          toggleOnClick={toggleOnClick}
          toggleCampaign={toggleCampaign}
          toggleAlways={toggleAlways}
        />
      </S.ChooseMenuSection>
      <S.CampaignDescSection>
        <CampaignsDesc />
      </S.CampaignDescSection>
      <S.CampaignsSection>
        {toggleCampaign ? (
          <>
            <S.CampaignElementContaienr>
              <CampaignCardElement
                CampaignName="[지구쓰담] 환경보호 실천 캠페인. 정화활동"
                CanGetCash={2500}
                PeriodData="기간: 2023.01.20~2023.03.02"
              />
            </S.CampaignElementContaienr>
            <S.CampaignElementContaienr>
              <CampaignCardElement
                CampaignName="[지구쓰담] 환경보호 실천 캠페인. 정화활동"
                CanGetCash={2500}
                PeriodData="기간: 2023.01.20~2023.03.02"
              />
            </S.CampaignElementContaienr>
            <S.CampaignElementContaienr>
              <CampaignCardElement
                CampaignName="[지구쓰담] 환경보호 실천 캠페인. 정화활동"
                CanGetCash={2500}
                PeriodData="기간: 2023.01.20~2023.03.02"
              />
            </S.CampaignElementContaienr>
            <S.CampaignElementContaienr>
              <CampaignCardElement
                CampaignName="[지구쓰담] 환경보호 실천 캠페인. 정화활동"
                CanGetCash={2500}
                PeriodData="기간: 2023.01.20~2023.03.02"
              />
            </S.CampaignElementContaienr>
          </>
        ) : (
          <></>
        )}
      </S.CampaignsSection>
    </S.CampaignContainer>
  );
};
