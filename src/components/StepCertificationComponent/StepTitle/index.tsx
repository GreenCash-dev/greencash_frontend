import React from 'react';
import * as S from './styled';

interface StepTitleProps {
  Title: string;
}

export const StepTitleComponent: React.FC<StepTitleProps> = ({ Title }) => {
  return <S.StepTitleFont>{Title}</S.StepTitleFont>;
};
