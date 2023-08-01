import React from 'react';

import * as S from './styled';

export const Back_Desc: React.FC = () => {
  return (
    <>
      <S.DescTitleContainer>
        <S.DescTitle>플라스틱류 발생량 추이</S.DescTitle>
      </S.DescTitleContainer>
      <S.MiddleDescContainer>
        <S.LeftTextDesc>
          <S.LeftDesc>
            코로나 19 이후 버려지는 폐기물 급증으로 <br />
            환경오염과 지구온난화가 가속화되고있다.
            <br />
            이에 따라 친환경적인 제품들과 리사이클, 업사이클 등<br />
            재활용품에 대한 관심이 증가하고 있다.
          </S.LeftDesc>
          <S.DownLeftDesc>
            환경에 도움이 될 수 있는 서비스 개발을 원했기에
            <br />
            재활용의 시작인 분리배출을 하도록 하는 서비스를 구상하였다.
          </S.DownLeftDesc>
        </S.LeftTextDesc>
        <S.RightDesc
          src={'https://cdn.discordapp.com/attachments/1054718420651872266/1077201999642234910/Frame_5.png'}
        />
      </S.MiddleDescContainer>
    </>
  );
};
