import React, { useEffect, useRef, useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router';

import styled from '@emotion/styled';
import {
  DoGivePage,
  MainPage,
  CapturePage,
  OnceCertificationPage,
  QuestionAndAnswerPage,
  CampaignPage,
  MissionPage,
  StepCertificationPage,
} from '@src/pages';

//icons
import FourSquaresIcon from '@assets/FourSquares.svg';
import NoneFourSquaresIcon from '@assets/NoneCheck/NoneFourSquares.svg';
import CheckedBoxIcon from '@assets/CheckedBox.svg';
import NoneCheckedBoxIcon from '@assets/NoneCheck/NoneCheckedBox.svg';
import ProfileIcon from '@assets/Profile.svg';
import NoneProfileIcon from '@assets/NoneCheck/NoneProfile.svg';
import SearchIcon from '@assets/Search.svg';
import NoneSearchIcon from '@assets/NoneCheck/NoneSearch.svg';
import { Footer, MissionModal } from './components';

import { MissionModalState, missionDataState } from './atom/Mission';
import { useRecoilState, useSetRecoilState } from 'recoil';

const App: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [locationPathName, setLocationPath] = useState(location.pathname.split('/')[1]);
  const mounted = useRef(false);

  const [missionModal, setMissionModal] = useRecoilState(MissionModalState);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      setLocationPath(location.pathname.split('/')[1]);
    }
  });
  const MainObject = { Icon: FourSquaresIcon, NIcon: NoneFourSquaresIcon, Tag: '메인', Path: '' };
  const MissionObject = { Icon: CheckedBoxIcon, NIcon: NoneCheckedBoxIcon, Tag: '미션', Path: 'mission' };
  const ProfileObject = { Icon: ProfileIcon, NIcon: NoneProfileIcon, Tag: '프로필', Path: 'profile' };
  const SearchObject = { Icon: SearchIcon, NIcon: NoneSearchIcon, Tag: '검색', Path: 'search' };

  const [modalData, setModalData] = useRecoilState(missionDataState);

  const setMissionModalState = useSetRecoilState(MissionModalState);
  const modalHandleClose = () => {
    setMissionModalState((prev) => ({
      ...prev,
      view: 'default',
    }));
  };
  return (
    <MediaResponsive>
      <MainScreen>
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="once" element={<CapturePage />} />
          <Route path="certification" element={<OnceCertificationPage />} />
          <Route path="donate" element={<DoGivePage />} />
          <Route path="qna" element={<QuestionAndAnswerPage />} />
          <Route path="mission" element={<MissionPage />} />
          <Route path="campaign" element={<CampaignPage />} />
          <Route path="step" element={<StepCertificationPage />} />
        </Routes>
        {missionModal.view === 'mission' ? (
          <MissionModal
            handleCloseModalOnClick={modalHandleClose}
            ModalTitle={modalData.ModalTitle}
            ModalTitleDesc={modalData.ModalTitleDesc}
            ModalGetCash={modalData.ModalGetCash}
            ModalInfoTitle={modalData.ModalInfoTitle}
            ModalInfoDesc={modalData.ModalInfoDesc}
          />
        ) : locationPathName === '' ||
          locationPathName === 'mission' ||
          locationPathName === 'search' ||
          locationPathName === 'profile' ? (
          <Footer
            locationPathName={locationPathName}
            IconsArr={[MainObject, MissionObject, ProfileObject, SearchObject]}
            navigate={navigate}
          />
        ) : (
          <></>
        )}
      </MainScreen>
    </MediaResponsive>
  );
};

export const MediaResponsive = styled.main`
  @media screen and (min-width: 425px) {
    width: 425px;
    height: 100%;
  }
  @media screen and (max-width: 425px) {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 376px) {
    width: 375px;
    height: 100%;
  }
  @media screen and (max-width: 320px) {
    width: 320px;
    height: 100%;
  }

  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0px auto;
  background-color: rgba(245, 245, 245, 1);
`;
export const MainScreen = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export default App;
