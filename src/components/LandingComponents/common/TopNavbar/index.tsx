import React from 'react';

import * as S from './styled';

interface CirclePositionProps {
  CirclePosition: number;
}

export const TopNavbar: React.FC<CirclePositionProps> = ({ CirclePosition }) => {
  return (
    <S.TopNavbarContainer>
      <S.CircleContainer widthNum={CirclePosition}>
        <S.Circle />
      </S.CircleContainer>
      <S.TopNavbarMenus>
        <S.TopNavbar>Main</S.TopNavbar>
        <S.TopNavbar>Mission</S.TopNavbar>
        <S.TopNavbar>Search/Profile</S.TopNavbar>
      </S.TopNavbarMenus>
    </S.TopNavbarContainer>
  );
};
