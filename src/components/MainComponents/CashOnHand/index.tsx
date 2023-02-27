import React from 'react';

import * as S from './styled';

interface CashOnHandValueProps {
  AmountOfCash: number;
}

export const CashOnHand: React.FC<CashOnHandValueProps> = ({ AmountOfCash }) => {
  return (
    <S.CashOnHandBox>
      <S.CashOnHandIcon>
        <S.CashOnHandIconText>c</S.CashOnHandIconText>
      </S.CashOnHandIcon>
      <S.CashOnHandValue>{AmountOfCash}</S.CashOnHandValue>
    </S.CashOnHandBox>
  );
};
