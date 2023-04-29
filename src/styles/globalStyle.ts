import { css } from '@emotion/react';

import { reset } from './reset';

export const globalStyle = css`
  ${reset}

  :root {
    --color-background: #fff;
  }
  .notosanskr * {
    font-family: 'Noto Sans KR', sans-serif;
  }
  html {
    ::-webkit-scrollbar {
      display: none;
    }
  }
  body {
    user-select: none;
    font-family: 'Noto Sans KR';
    color: var(--color-text-primary);
    background-color: var(--color-background);
  }
`;
