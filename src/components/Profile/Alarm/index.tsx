import React, { useState } from 'react';

import * as S from './styled';

interface AlarmProps {
  title: string;
  text: string;
}

export const Alarm: React.FC<AlarmProps> = ({ title, text }) => {
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
          <S.AlarmBoxTitle>{title}</S.AlarmBoxTitle>
          <S.AlarmBoxText>{text}</S.AlarmBoxText>
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
