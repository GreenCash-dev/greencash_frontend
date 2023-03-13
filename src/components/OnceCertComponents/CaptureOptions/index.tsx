import React, { MouseEventHandler } from 'react';

import * as S from './styled';

interface CaptureOpitonProps {
  OptionsBoxImgSrc: string;
  OptionBoxDesc: string;
  OptionIsNext: MouseEventHandler<HTMLElement>;
}

export const CaptureOptionsBox: React.FC<CaptureOpitonProps> = ({ OptionsBoxImgSrc, OptionBoxDesc, OptionIsNext }) => {
  return (
    <S.OptionsContainer onClick={OptionIsNext}>
      <S.OptionsBox>
        <S.OptionsIcon src={OptionsBoxImgSrc} />
      </S.OptionsBox>
      <S.OptionsDesc>{OptionBoxDesc}</S.OptionsDesc>
    </S.OptionsContainer>
  );
};
