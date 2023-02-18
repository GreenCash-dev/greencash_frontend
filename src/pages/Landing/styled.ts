import styled from '@emotion/styled';

export const MainContainer = styled.div`
  height: 100vh;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const MainLogo = styled.img`
  width: 495px;
  height: 149px;
  margin: auto;
`;

export const Inner = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
