import React, { MouseEventHandler } from 'react';

import * as S from './styled';
import { CashOnHand } from '@components/MainComponents';

interface MissionModalProps {
  handleCloseModalOnClick: MouseEventHandler;
}

export const MissionModal: React.FC<MissionModalProps> = ({ handleCloseModalOnClick }) => {
  return (
    <S.ModalWarp>
      <S.MissionModalBox>
        <S.MissionWarpContainer>
          <S.MissionTopContainer>
            <S.TitleContainer>
              <S.MissionTitle>물수건/물걸레 이용하기</S.MissionTitle>
              <S.MissionDesc>물티슈 대신 물걸레로 청소해요</S.MissionDesc>
            </S.TitleContainer>
            <S.YouCanGetCashContainer>
              <CashOnHand marginTop={'-5.5px'} marginRight="1px" AmountOfCash={1000} />
            </S.YouCanGetCashContainer>
          </S.MissionTopContainer>
          <S.MissionInfoContainer>
            <S.MissionInfoPoint>물티슈는 환경오염의 주범이에요!</S.MissionInfoPoint>
            <S.MissionInfoDesc>
              물티슈 대신 물수건 혹은 물걸레로 청소하고
              <br /> 캐시를 지급받으세요.
            </S.MissionInfoDesc>
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
