import styled from '@emotion/styled';

export const OptionsContainer = styled.div<{ NowCertification: boolean }>`
  display: flex;
  flex-direction: column;

  margin: auto;
  opacity: ${(props) => (props.NowCertification ? 0.3 : 1)};
`;
export const OptionsButton = styled.button`
  width: 50px;
  height: 50px;

  display: flex;
  border: none;
  border-radius: 7px;

  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  background-color: #ffffff;
  cursor: pointer;
`;

export const OptionsIcon = styled.img<{ NoneReverse: boolean }>`
  width: 20px;
  height: 20px;
  margin: auto;

  rotate: ${(props) => (props.NoneReverse ? '0deg' : '180deg')};
`;
export const OptionsDesc = styled.div`
  margin-top: 10px;

  color: #000000;
  text-align: center;
  font-size: 12px;
`;
