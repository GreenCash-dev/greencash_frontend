import styled from '@emotion/styled';

export const SearchKeywordContainer = styled.section`
  width: 95%;

  display: flex;
  flex-direction: column;

  margin-left: 20px;
`;

export const RecommendKeywordTitle = styled.strong`
  font-size: 16px;
  font-weight: 500;

  color: #000;

  margin-top: 15px;
`;

export const KeywordsContainer = styled.div`
  width: 100%;
  display: flex;

  margin-top: 10px;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const KeywordBox = styled.div`
  min-width: 70px;
  height: 24px;
  display: flex;

  margin-right: 8px;

  border-radius: 20px;
  border: 1px solid rgba(200, 200, 200, 1);
  background-color: #fff;
`;

export const Keyword = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: #000;

  margin: auto;
`;

export const HorizontalLine = styled.div`
  width: 90%;
  height: 2px;

  margin-top: 20px;
  background-color: rgba(234, 234, 234, 1);
`;
