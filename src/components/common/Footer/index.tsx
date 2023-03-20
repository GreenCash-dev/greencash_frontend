/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import * as S from './styled';

interface FooterPathProps {
  locationPathName: string;
  IconsArr: [{ Icon: string; NIcon: string; Tag: string; Path: string }];
}

export const Footer: React.FC<FooterPathProps> = ({ locationPathName, IconsArr }) => {
  console.log(IconsArr);
  return (
    <S.FooterBox>
      <S.FooterContainer>
        {IconsArr.map((val, idx) => {
          return (
            <S.FooterMainIconContainer key={idx}>
              <S.Icon src={locationPathName === val.Path ? val.Icon : val.NIcon} />
              <S.IconText MainTextColor={locationPathName}>{val.Tag}</S.IconText>
            </S.FooterMainIconContainer>
          );
        })}
      </S.FooterContainer>
    </S.FooterBox>
  );
};
