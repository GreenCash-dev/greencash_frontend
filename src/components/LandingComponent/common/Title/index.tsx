import React from 'react';

import * as S from './styled';

interface TitleData {
  TitleText: string;
  textAlign: string;
}

export const Title: React.FC<TitleData> = ({ TitleText, textAlign }) => (
  <S.Title textAlign={textAlign}>{TitleText}</S.Title>
);
