import React from 'react';
import * as S from './styled';
import { useGoBack as GoBack } from '@src/hooks';

import LeftArrowIcon from '@assets/LeftArrow.svg';
import { NavigateFunction } from 'react-router';

interface PathMoveProps {
  MoveWhere: 1 | -1;
  NavigateFunc: NavigateFunction;
}

export const GobackIcon: React.FC<PathMoveProps> = ({ MoveWhere, NavigateFunc }) => (
  <S.LeftArrow onClick={() => NavigateFunc(MoveWhere)} src={LeftArrowIcon} />
);
