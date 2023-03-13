import styled from '@emotion/styled';

export const ButtonElement = styled.button<{ backgroundColor: string; disabledButton: boolean }>`
  width: 100%;
  height: 55px;

  cursor: pointer;
  border: none;
  border-radius: 10px;
  background: ${(props) => (props.disabled ? '#DEDEDE' : props.backgroundColor)};
`;

export const TextInButton = styled.div<{ fontSize: string; fontColor: string }>`
  font-family: 'Noto Sans KR', sans-serif;
  text-align: center;
  font-size: ${(props) => props.fontSize};
  font-weight: 700;
  color: ${(props) => props.fontColor};
`;
