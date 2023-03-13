import React from 'react';
import * as S from './styled';

import LeftArrowIcon from '@assets/LeftArrow.svg';
import { NavigateFunction } from 'react-router';

interface PathMoveProps {
  MoveWhere: 1 | -1;
  NavigateFunc: NavigateFunction;
}

export const GobackIcon: React.FC<PathMoveProps> = ({ MoveWhere, NavigateFunc }) => (
  <S.LeftArrow alt="뒤로가기" onClick={() => NavigateFunc(MoveWhere)} src={LeftArrowIcon} />
);
