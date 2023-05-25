import styled from '@emotion/styled';

export const NavbarBox = styled.header`
  top: 0;
  width: 100%;
  height: 70px;
  display: flex;
  position: sticky;

  background-color: #ffffff;
  box-shadow: rgb(0 0 0 / 2%) 0px 7px 10px 0px;

  z-index: 99;
`;

export const NavbarText = styled.div`
  margin: auto;
  font-size: 22px;
  font-weight: bold;
  color: rgba(173, 214, 5, 1);

  letter-spacing: 1px;
`;
