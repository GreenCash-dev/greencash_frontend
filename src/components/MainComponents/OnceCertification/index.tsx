import React from 'react';

import * as S from './styled';

export const OnceCertification: React.FC = () => {
  return (
    <S.OnceCertificationBox>
      <S.OnceCertificationContainer>
        <S.CameraIcon
          src="https://cdn.discordapp.com/attachments/1054718420651872266/1079770879136907284/cameraIcon.png"
          alt="Camera"
        />
        <S.OnceCertificationText>한번에 인증</S.OnceCertificationText>
      </S.OnceCertificationContainer>
    </S.OnceCertificationBox>
  );
};
