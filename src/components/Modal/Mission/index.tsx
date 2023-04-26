import React, { MouseEventHandler } from 'react';

import * as S from './styled';
import { CashOnHand } from '@src/components';

interface MissionModalProps {
  handleCloseModalOnClick: MouseEventHandler;
  ModalTitle: string;
  ModalTitleDesc: string;
  ModalGetCash: number;
  ModalInfoTitle: string;
  ModalInfoDesc: string;
}

export const MissionModal: React.FC<MissionModalProps> = ({
  handleCloseModalOnClick,
  ModalTitle,
  ModalTitleDesc,
  ModalGetCash,
  ModalInfoTitle,
  ModalInfoDesc,
}) => {
  return (
    <S.ModalWarp>
      <S.MissionModalBox>
        <S.MissionWarpContainer>
          <S.MissionTopContainer>
            <S.TitleContainer>
              <S.MissionTitle>{ModalTitle}</S.MissionTitle>
              <S.MissionDesc>{ModalTitleDesc}</S.MissionDesc>
            </S.TitleContainer>
            <S.YouCanGetCashContainer>
              <CashOnHand marginTop={'-5.5px'} marginRight="1px" AmountOfCash={ModalGetCash} />
            </S.YouCanGetCashContainer>
          </S.MissionTopContainer>
          <S.MissionInfoContainer>
            <S.MissionInfoPoint>{ModalInfoTitle}</S.MissionInfoPoint>
            <S.MissionInfoDesc>{ModalInfoDesc}</S.MissionInfoDesc>
          </S.MissionInfoContainer>
          <S.MissionButtonContainer>
            <S.MissionButton onClick={handleCloseModalOnClick}>
              <S.MissionButtonText>미션 수행하기</S.MissionButtonText>
            </S.MissionButton>
          </S.MissionButtonContainer>
        </S.MissionWarpContainer>
      </S.MissionModalBox>
    </S.ModalWarp>
  );
};
