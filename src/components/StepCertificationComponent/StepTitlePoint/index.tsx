import React from 'react';
import * as S from './styled';

interface StepPointProps {
  StepNumber: number;
}

export const StepTitlePoint: React.FC<StepPointProps> = ({ StepNumber }) => {
  return (
    <S.StepCirclePoint>
      <S.StepCircleNumber>{StepNumber}</S.StepCircleNumber>
    </S.StepCirclePoint>
  );
};
