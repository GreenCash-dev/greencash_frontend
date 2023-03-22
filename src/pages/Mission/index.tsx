import { MissionHeader, MissionModal, MissionScreenComponent } from '@src/components';
import React, { useState } from 'react';

import * as S from './styled';

import MissionIllustration from '@assets/image 24.png';
import { useSetRecoilState } from 'recoil';
import { MissionModalState } from '@src/atom/Mission';
import { useMediaQuery } from 'react-responsive';

export const MissionPage: React.FC = () => {
  const isResponsive = useMediaQuery({ minWidth: '768px' });
  const [modalInfo, setModalInfo] = useState([
    {
      ModalTitle: '',
      ModalTitleDesc: '',
      ModalGetCash: 0,
      ModalInfoTitle: '',
      ModalInfoDesc: '',
    },
  ]);
  console.log(modalInfo);
  const setMissionModalState = useSetRecoilState(MissionModalState);
  const isOpenOnClick = () => {
    setMissionModalState((prev) => ({
      ...prev,
      view: 'mission',
    }));
  };
  return (
    <S.MissionContainer>
      <S.MissionHeaderContainer>
        <MissionHeader MissionText="숨은 미션들을 찾고 하나씩 성공해보세요!" />
      </S.MissionHeaderContainer>
      <MissionScreenComponent
        setModalInfo={setModalInfo}
        ModalOpenOnClick={isOpenOnClick}
        Illustration={MissionIllustration}
        isReponsive={isResponsive}
      />
    </S.MissionContainer>
  );
};
