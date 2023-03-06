import styled from '@emotion/styled';

export const MainIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 2px;
`;
export const MainIconText = styled.div<{ MainTextColor: string }>`
  color: ${(props) => (props.MainTextColor === '' ? '#acd60a' : '#D9D9D9')};
  font-size: 13px;
  font-weight: bold;
  margin-top: 7px;
`;
