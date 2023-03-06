import React from 'react';

import * as S from './styled';

import FourSquaresIcon from '@assets/FourSquares.svg';
import NoneFourSquaresIcon from '@assets/NoneCheck/NoneFourSquares.svg';

interface pathProps {
  locationPath: string;
}

export const FooterMainIcon: React.FC<pathProps> = ({ locationPath }) => {
  return (
    <>
      <S.MainIcon src={locationPath === '' ? FourSquaresIcon : NoneFourSquaresIcon} />
      <S.MainIconText MainTextColor={locationPath}>메인</S.MainIconText>
    </>
  );
};
