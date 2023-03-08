import React from 'react';
import * as S from './styled';

interface ButtonStyleProps {
  BackgroundColor: string;
  fontSize: string;
  fontColor: string;
  DoText: string;
  OnClick: React.MouseEventHandler<HTMLElement>;
  CashIsMinus: boolean;
}

export const Button: React.FC<ButtonStyleProps> = ({
  BackgroundColor,
  fontSize,
  fontColor,
  DoText,
  OnClick,
  CashIsMinus,
}) => {
  return (
    <S.ButtonElement
      disabled={CashIsMinus}
      disabledButton={CashIsMinus}
      backgroundColor={BackgroundColor}
      onClick={OnClick}
    >
      <S.TextInButton fontSize={fontSize} fontColor={fontColor}>
        {DoText}
      </S.TextInButton>
    </S.ButtonElement>
  );
};
