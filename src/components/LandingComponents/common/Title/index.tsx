import React from 'react';

import * as S from './styled';

interface TitleData {
  TitleText: string;
}

export const Title: React.FC<TitleData> = ({ TitleText }) => <S.Title>{TitleText}</S.Title>;
