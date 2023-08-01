import React from 'react';

import * as S from './styled';

import SearchIcon from '@assets/Search.svg';

export const SearchBar: React.FC = () => {
  return (
    <S.SearchBarContainer>
      <S.SearchBarIcon src={SearchIcon as string} />
      <S.SearchForm>
        <S.SearchBarInput placeholder="검색어를 입력해주세요." />
      </S.SearchForm>
    </S.SearchBarContainer>
  );
};
