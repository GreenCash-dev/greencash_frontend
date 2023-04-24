import styled from '@emotion/styled';

export const SearchIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 2px;
`;
export const SearchText = styled.div<{ SearchTextColor: string }>`
  color: ${(props) => (props.SearchTextColor === 'search' ? '#acd60a' : '#D9D9D9')};
  font-size: 13px;
  font-weight: bold;
  margin-top: 7px;
`;
