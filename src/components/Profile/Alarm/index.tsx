import React, { useState } from 'react';

import * as S from './styled';

export const Alarm: React.FC = () => {
  //토글 버튼관리
  const [checked, setChecked] = useState<boolean>(false);
  const ToggleButtonOnClick = () => {
    setChecked(!checked);
  };
  console.log(checked);
  return (
    <S.AlarmBox>
      <S.AlarmDataPosition>
        <S.AlarmBoxTextContainer>
          <S.AlarmBoxTitle>분리배출 알림</S.AlarmBoxTitle>
          <S.AlarmBoxText>매주 목요일 오전9시</S.AlarmBoxText>
        </S.AlarmBoxTextContainer>
        <S.AlarmToggleContainer>
          <S.AlarmToggleLabel onClick={ToggleButtonOnClick} toggleBoolean={checked}>
            <S.AlarmToggleSpan toggleBoolean={checked}></S.AlarmToggleSpan>
          </S.AlarmToggleLabel>
        </S.AlarmToggleContainer>
      </S.AlarmDataPosition>
    </S.AlarmBox>
  );
};
