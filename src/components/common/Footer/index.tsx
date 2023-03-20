import React from 'react';
import * as S from './styled';

interface FooterPathProps {
  locationPathName: string;
  MainIconPath: string;
  NoneMainIconPath: string;
}

export const Footer: React.FC<FooterPathProps> = ({ locationPathName, MainIconPath, NoneMainIconPath }) => {
  return (
    <S.FooterBox>
      <S.FooterContainer>
        <S.FooterMainIconContainer>
          <S.Icon src={locationPathName === '' ? MainIconPath : NoneMainIconPath} />
          <S.IconText MainTextColor={locationPathName}>메인</S.IconText>
        </S.FooterMainIconContainer>
      </S.FooterContainer>
    </S.FooterBox>
  );
};
