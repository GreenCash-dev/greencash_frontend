import React from 'react';

import * as S from './styled';
import ShoppingCartIcon from '@assets/ShoppingCart.svg';

export const Store: React.FC = () => {
  return (
    <S.StoreBox>
      <S.StorePosition>
        <S.StoreIcon src={ShoppingCartIcon} />
        <S.StoreText>스토어</S.StoreText>
      </S.StorePosition>
    </S.StoreBox>
  );
};
