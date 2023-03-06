import React from 'react';

import * as S from './styled';

import SearchIcon from '@assets/Search.svg';
import NoneSearchIcon from '@assets/NoneCheck/NoneSearch.svg';

interface pathProps {
  locationPath: string;
}

export const FooterSearchIcon: React.FC<pathProps> = ({ locationPath }) => {
  return (
    <>
      <S.SearchIcon src={locationPath === 'Search' ? SearchIcon : NoneSearchIcon} />
      <S.SearchText SearchTextColor={locationPath}>미션</S.SearchText>
    </>
  );
};
