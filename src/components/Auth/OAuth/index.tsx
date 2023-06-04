import React, { MouseEventHandler } from 'react';

import * as S from './styled';

interface OAuthProps {
  GoogleLogo: string;
  GoogleOAuthOnClick: MouseEventHandler;
}

export const OAuth: React.FC<OAuthProps> = ({ GoogleLogo, GoogleOAuthOnClick }) => {
  return (
    <S.OAuthBox onClick={GoogleOAuthOnClick}>
      <S.OAuthLogo src={GoogleLogo} />
      <S.OAuthText>구글로 시작하기</S.OAuthText>
    </S.OAuthBox>
  );
};
