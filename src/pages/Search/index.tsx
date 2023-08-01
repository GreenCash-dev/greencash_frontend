import React from 'react';

import * as S from './styled';
import { RecentSearch, RecommendKeyword, SearchBar } from '@src/components/Search';

export const SearchPage: React.FC = () => {
  return (
    <S.SearchContainer>
      <SearchBar />
      <RecommendKeyword />
      <RecentSearch />
    </S.SearchContainer>
  );
};
