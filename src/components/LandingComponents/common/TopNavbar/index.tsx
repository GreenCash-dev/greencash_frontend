import React from 'react';

import * as S from './styled';

interface CirclePositionProps {
  CirclePosition: number;
  marginTop: string;
  marginBottom: string;
}
//margin top과 bottom에 줄 값을 수치까지 입력하세요. ex) 1px
export const TopNavbar: React.FC<CirclePositionProps> = ({ CirclePosition, marginTop, marginBottom }) => {
  return (
    <S.TopNavbarContainer marginTop={marginTop} marginBottom={marginBottom}>
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
