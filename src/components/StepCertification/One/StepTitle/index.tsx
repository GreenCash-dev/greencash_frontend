import React from 'react';
import * as S from './styled';

interface StepTitleProps {
  title: string;
}

export const StepTitleComponent: React.FC<StepTitleProps> = ({ title }) => {
  return <S.StepTitleFont>{title}</S.StepTitleFont>;
};
