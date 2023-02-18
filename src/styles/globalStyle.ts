import { css } from '@emotion/react';

import { reset } from './reset';

export const globalStyle = css`
  ${reset}

  :root {
    --color-background: #ffffff;
  }
  .notosanskr * {
    font-family: 'Noto Sans KR', sans-serif;
  }
  html {
    font-size: 10px;
    color: #fff;
    ::-webkit-scrollbar {
      display: none;
    }
  }
  body {
    font-family: 'Noto Sans KR';
    color: var(--color-text-primary);
    background-color: var(--color-background);
  }
`;
