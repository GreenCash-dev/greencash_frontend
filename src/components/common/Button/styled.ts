import styled from '@emotion/styled';

export const ButtonElement = styled.button<{ backgroundColor: string; disabledButton: boolean }>`
  width: 100%;
  height: 50px;

  cursor: pointer;
  border: none;
  border-radius: 10px;
  background: ${(props) =>
    props.disabled ? '#DEDEDE' : 'linear-gradient(134deg, rgba(150, 222, 90, 1), rgba(196, 234, 99, 1))'};
`;

export const TextInButton = styled.span<{ fontSize: string; fontColor: string }>`
  font-family: 'Noto Sans KR', sans-serif;
  text-align: center;
  font-size: ${(props) => props.fontSize};
  font-weight: 700;
  color: ${(props) => props.fontColor};
`;
