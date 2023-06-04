import React from 'react';

import * as S from './styled';

interface ButtonFunctionPrpos {
  LogoutOnClick: React.MouseEventHandler;
}

export const LogoutButton: React.FC<ButtonFunctionPrpos> = ({ LogoutOnClick }) => {
  return (
    <S.LogoutContainer>
      <S.LogoutFont onClick={LogoutOnClick}>로그아웃</S.LogoutFont>
    </S.LogoutContainer>
  );
};
