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

export const MediaResponsive = styled.div`
  @media screen and (min-width: 425px) {
    width: 425px;
    height: 790px;
  }
  @media screen and (max-width: 375px) {
    width: 375px;
    height: 790px;
  }
  @media screen and (max-width: 320px) {
    width: 320px;
    height: 790px;
  }

  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0px auto;
  background-color: rgba(245, 245, 245, 1);
`;
export const MainScreen = styled.main`
  position: relative;
  width: 100%;
`;
export default App;
