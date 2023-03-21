import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

//Footer
export const FooterBox = styled.footer`
  bottom: 0;
  width: 100%;
  height: 70px;
  display: flex;
  position: sticky;

  background-color: #ffffff;
  z-index: 99;
`;

export const FooterContainer = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  & > * {
    //자식 스타일
    cursor: pointer;
    margin: auto;
    text-decoration: none;
  }
`;

export const FooterIconContainer = styled.button`
  display: flex;
  flex-direction: column;

  border: none;
  background: none;
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin: auto;
`;
export const IconText = styled.div<{ TextColor: boolean }>`
  color: ${(props) => (props.TextColor ? '#acd60a' : '#D9D9D9')};
  font-size: 13px;
  font-weight: bold;
  margin-top: 7px;
`;
