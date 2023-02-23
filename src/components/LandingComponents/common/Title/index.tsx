import React from 'react';

import * as S from './styled';

interface TitleData {
  TitleText: string;
  useCenter: boolean;
}

export const Title: React.FC<TitleData> = ({ TitleText, useCenter }) => (
  <S.Title Center={useCenter}>{TitleText}</S.Title>
);
