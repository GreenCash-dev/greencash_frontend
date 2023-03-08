import React from 'react';
import * as S from './styled';

interface CloseHandlerProps {
  CloseHandler: React.MouseEventHandler<HTMLElement>;
}

export const GiveSuccessModal: React.FC<CloseHandlerProps> = ({ CloseHandler }) => {
  return (
    <S.ModalWarp>
      <S.GiveSuccessModalBox>
        <S.TopContainer>
          <S.GiveSuccessModalTitle>감사합니다!</S.GiveSuccessModalTitle>
          <S.GiveSuccessDescContainer>
            <S.GiveSuccessModalDesc>기부된 캐시는 환경 재단에 후원되어</S.GiveSuccessModalDesc>
            <S.GiveSuccessModalDesc>환경을 위해 쓰일 예정입니다.</S.GiveSuccessModalDesc>
          </S.GiveSuccessDescContainer>
        </S.TopContainer>
        <S.GiveSuccessCloseButton onClick={CloseHandler}>
          <S.GiveSuccessCloseButtonText>확인</S.GiveSuccessCloseButtonText>
        </S.GiveSuccessCloseButton>
      </S.GiveSuccessModalBox>
    </S.ModalWarp>
  );
};
