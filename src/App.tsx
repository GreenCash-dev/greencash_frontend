import React from 'react';
import { Routes, Route } from 'react-router';

import { Footer, Navbar } from './components';
import styled from '@emotion/styled';
import { MainPage } from './pages';

const App: React.FC = () => {
  return (
    <MediaResponsive>
      <Routes>
        <Route index element={<MainPage />} />
      </Routes>
    </MediaResponsive>
  );
};

export const MediaResponsive = styled.div`
  @media screen and (max-width: 425px), screen and (min-width: 768px) {
    width: 425px;
    height: 100%;
  }
  @media screen and (max-width: 375px) {
    width: 375px;
    height: 100%;
  }

  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0px auto;
  background-color: rgba(245, 245, 245, 1);
`;

export default App;
