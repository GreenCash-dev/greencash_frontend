import { Global } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import { globalStyle } from './styles';
import { RecoilRoot } from 'recoil';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RecoilRoot>
        <Global styles={globalStyle} />
        <App />
      </RecoilRoot>
    </BrowserRouter>
  </React.StrictMode>
);
