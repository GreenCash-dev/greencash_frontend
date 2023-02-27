import React from 'react';
import { Routes, Route } from 'react-router';

import { Navbar } from './components';
import styled from '@emotion/styled';
import { MainPage } from './pages';

const App: React.FC = () => {
  return (
    <MediaResponsive>
      <Navbar />
      <MainScreen>
        <Routes>
          <Route index element={<MainPage />} />
        </Routes>
      </MainScreen>
    </MediaResponsive>
  );
};

export const MediaResponsive = styled.div`
  @media screen and (max-width: 768px), screen and (min-width: 768px) {
    width: 425px;
    height: 100%;
  }
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0px auto;
  background-color: rgba(245, 245, 245, 1);
`;

export const MainScreen = styled.main`
  position: relative;
  width: 370px;
  margin: auto;
`;

export default App;
