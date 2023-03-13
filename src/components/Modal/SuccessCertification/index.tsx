import React from 'react';
import * as S from './styled';

interface CloseHandlerProps {
  CloseHandler: React.MouseEventHandler<HTMLElement>;
  GoHereStore: React.MouseEventHandler<HTMLElement>;
  GoHereDonate: React.MouseEventHandler<HTMLElement>;
  YouGetCashNow: number;
  StoreIcon: string;
  DoGiveIcon: string;
}

export const SuccessCertificationModal: React.FC<CloseHandlerProps> = ({
  CloseHandler,
  GoHereStore,
  GoHereDonate,
  YouGetCashNow,
  StoreIcon,
  DoGiveIcon,
}) => {
  return (
    <S.ModalWarp>
      <S.SuccessCertificationModalBox>
        <S.TopContainer>
          <S.SuccessCertificationModalTitle>인증 완료</S.SuccessCertificationModalTitle>
          <S.SuccessCertificationDescContainer>
            <S.AboutCashContainer>
              <S.YouGetCash src={'https://cdn-icons-png.flaticon.com/128/565/565487.png'} />
              <S.HowMuchCash>{YouGetCashNow}캐시</S.HowMuchCash>
            </S.AboutCashContainer>
            <S.SuccessCertificationModalDesc>가 적립되었습니다.</S.SuccessCertificationModalDesc>
          </S.SuccessCertificationDescContainer>
          <S.ChooseGoingWhere>
            <S.GoHereContainer>
              <S.GoStoreButton onClick={GoHereStore}>
                <S.WhereYouGoingIcon src={StoreIcon} />
              </S.GoStoreButton>
              <S.GoWhereText>스토어</S.GoWhereText>
            </S.GoHereContainer>
            <S.GoHereContainer>
              <S.GoDoGiveButton onClick={GoHereDonate}>
                <S.WhereYouGoingIcon src={DoGiveIcon} />
              </S.GoDoGiveButton>
              <S.GoWhereText>기부하기</S.GoWhereText>
            </S.GoHereContainer>
          </S.ChooseGoingWhere>
        </S.TopContainer>
        <S.SuccessCertificationCloseButton onClick={CloseHandler}>
          <S.SuccessCertificationCloseButtonText>닫기</S.SuccessCertificationCloseButtonText>
        </S.SuccessCertificationCloseButton>
      </S.SuccessCertificationModalBox>
    </S.ModalWarp>
  );
};
