import React from 'react';

import * as S from './styled';

interface EachDataProps {
  dataImgUrl: string;
  dataName: string;
  dataTextColor: string;
}

export const EachDataBox: React.FC<EachDataProps> = ({ dataImgUrl, dataName, dataTextColor }) => {
  return (
    <S.DataBox backgroundImgUrl={dataImgUrl}>
      <S.backgroundCoverColor>
        <S.DataText textColor={dataTextColor}>{dataName}</S.DataText>
      </S.backgroundCoverColor>
    </S.DataBox>
  );
};
