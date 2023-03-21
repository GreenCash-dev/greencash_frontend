/* eslint-disable @typescript-eslint/ban-types */
import React, { MouseEventHandler } from 'react';
import * as S from './styled';
import { NavigateFunction } from 'react-router';

interface FooterPathProps {
  locationPathName: string;
  IconsArr: MainProps[];
  navigate: NavigateFunction;
}

interface MainProps {
  Icon: string;
  NIcon: string;
  Tag: string;
  Path: string;
}

export const Footer: React.FC<FooterPathProps> = ({ locationPathName, IconsArr, navigate }) => {
  return (
    <S.FooterBox>
      <S.FooterContainer>
        {IconsArr.map((val, idx) => {
          return (
            <S.FooterIconContainer onClick={() => navigate(val.Path)} key={idx}>
              <S.Icon src={locationPathName === val.Path ? val.Icon : val.NIcon} />
              <S.IconText TextColor={val.Path === locationPathName ? true : false}>{val.Tag}</S.IconText>
            </S.FooterIconContainer>
          );
        })}
      </S.FooterContainer>
    </S.FooterBox>
  );
};
