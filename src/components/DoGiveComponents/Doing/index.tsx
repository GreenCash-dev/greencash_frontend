import React from 'react';
import * as S from './styled';

interface DoingGiveProps {
  OwnCash: number;
  GivingCash: number;
  PlantIconSrc: string;
  UpArrowIconSrc: string;
}

export const DoingGive: React.FC<DoingGiveProps> = ({ OwnCash, PlantIconSrc, GivingCash, UpArrowIconSrc }) => {
  return (
    <>
      <S.HavingCashContainer>
        <S.HavingCashText>보유중인 캐시</S.HavingCashText>
        <S.HavingCash>{OwnCash} 캐시</S.HavingCash>
      </S.HavingCashContainer>
      <S.DoingContainer>
        <S.DoingPlantImgContainer>
          <S.DoingPlant src={PlantIconSrc} />
        </S.DoingPlantImgContainer>
        <S.DoingText>사람들이 기부중인 캐시</S.DoingText>
        <S.DoingCash>{GivingCash}</S.DoingCash>
        {GivingCash > 1 ? (
          <S.UpCashContainer>
            <S.UpCash src={UpArrowIconSrc} />
          </S.UpCashContainer>
        ) : null}
      </S.DoingContainer>
    </>
  );
};
