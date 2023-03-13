import React, { MouseEventHandler } from 'react';

import * as S from './styled';

interface CaptureOpitonProps {
  NoneReverseQ: boolean;
  NowCertificationQ: boolean;
  OptionsBoxImgSrc: string;
  OptionBoxDesc: string;
  OptionOnClick: MouseEventHandler<HTMLElement>;
}

export const CaptureOptionsBox: React.FC<CaptureOpitonProps> = ({
  NoneReverseQ,
  NowCertificationQ,
  OptionsBoxImgSrc,
  OptionBoxDesc,
  OptionOnClick,
}) => {
  console.log(!NowCertificationQ);
  return (
    <S.OptionsContainer NowCertification={!NowCertificationQ} onClick={OptionOnClick}>
      <S.OptionsButton disabled={!NowCertificationQ}>
        <S.OptionsIcon NoneReverse={NoneReverseQ} src={OptionsBoxImgSrc} />
      </S.OptionsButton>
      <S.OptionsDesc>{OptionBoxDesc}</S.OptionsDesc>
    </S.OptionsContainer>
  );
};
