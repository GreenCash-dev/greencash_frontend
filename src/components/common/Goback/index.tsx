import React from 'react';
import * as S from './styled';
import { useGoBack as GoBack } from '@src/hooks';

import LeftArrowIcon from '@assets/LeftArrow.svg';

export const GobackIcon: React.FC = () => <S.LeftArrow onClick={GoBack} src={LeftArrowIcon} />;
