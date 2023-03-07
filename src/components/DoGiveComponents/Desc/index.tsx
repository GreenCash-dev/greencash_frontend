import React from 'react';
import * as S from './styled';

export const DoGiveDesc: React.FC = () => {
  return (
    <>
      <S.DescTitle>기부된 캐시는 환경을 위해 쓰일 예정입니다.</S.DescTitle>
      <S.DescDetailData to="#">자세한 내용 보러가기</S.DescDetailData>
    </>
  );
};
