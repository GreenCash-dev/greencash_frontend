import React from 'react';
import { Routes, Route } from 'react-router';

import styled from '@emotion/styled';
import { DoGivePage, MainPage } from '@src/pages';

const App: React.FC = () => {
  return (
    <MediaResponsive>
      <MainScreen>
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="give" element={<DoGivePage />} />
        </Routes>
      </MainScreen>
    </MediaResponsive>
  );
};

export const MediaResponsive = styled.main`
  @media screen and (min-width: 425px) {
    width: 425px;
    height: 100%;
  }
  @media screen and (max-width: 425px) {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 376px) {
    width: 375px;
    height: 100%;
  }
  @media screen and (max-width: 320px) {
    width: 320px;
    height: 100%;
  }

  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0px auto;
  background-color: rgba(245, 245, 245, 1);
`;
export const MainScreen = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export default App;
