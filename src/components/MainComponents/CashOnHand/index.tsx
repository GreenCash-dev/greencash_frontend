import React from 'react';

import * as S from './styled';

interface CashOnHandValueProps {
  AmountOfCash: number;
  marginTop: string;
  marginRight: string;
}

export const CashOnHand: React.FC<CashOnHandValueProps> = ({ AmountOfCash, marginTop, marginRight }) => {
  return (
    <S.CashOnHandBox>
      <S.CashOnHandIcon>
        <S.CashOnHandIconText marginTop={marginTop} marginRight={marginRight}>
          c
        </S.CashOnHandIconText>
      </S.CashOnHandIcon>
      <S.CashOnHandValue>{AmountOfCash}</S.CashOnHandValue>
    </S.CashOnHandBox>
  );
};
