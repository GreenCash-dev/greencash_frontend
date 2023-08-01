import React from 'react';

import * as S from './styled';

export const RecommendKeyword: React.FC = () => {
  return (
    <S.SearchKeywordContainer>
      <S.RecommendKeywordTitle>추천 검색어</S.RecommendKeywordTitle>
      <S.KeywordsContainer>
        <S.KeywordBox>
          <S.Keyword>#스티로폼</S.Keyword>
        </S.KeywordBox>
        <S.KeywordBox>
          <S.Keyword>#비닐</S.Keyword>
        </S.KeywordBox>
        <S.KeywordBox>
          <S.Keyword>#영수증</S.Keyword>
        </S.KeywordBox>
        <S.KeywordBox>
          <S.Keyword>#종이팩</S.Keyword>
        </S.KeywordBox>
        <S.KeywordBox>
          <S.Keyword>#플라스틱</S.Keyword>
        </S.KeywordBox>
        <S.KeywordBox>
          <S.Keyword>#스티로폼</S.Keyword>
        </S.KeywordBox>
      </S.KeywordsContainer>
      <S.HorizontalLine />
    </S.SearchKeywordContainer>
  );
};
