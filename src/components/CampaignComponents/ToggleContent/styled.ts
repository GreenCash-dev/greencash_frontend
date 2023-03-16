import styled from '@emotion/styled';

export const ToggleContentContainer = styled.div`
  display: flex;
`;
export const ToggleMenuText = styled.strong<{ toggled: boolean }>`
  font-size: 17px;
  font-weight: bold;
  text-align: center;
  color: ${(props) => (props.toggled ? '#BDDF33' : '#868A9A')};
  cursor: pointer;

  transition: all 0.2s;
  margin: auto;
`;

export const verticalLine = styled.div`
  width: 2px;
  height: 25px;

  background-color: #e8e9e8;
`;
