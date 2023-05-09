import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GobackIcon } from '@src/components';
import { StepTitleComponent, StepTitlePoint } from '@src/components/StepCertificationComponent';
import * as S from './styled';

import datas from '@src/data/stepOne';

export const StepCertificationPage: React.FC = () => {
  const [content, setContent] = useState<string>('');
  const handleClickButton = (e) => {
    setContent(e.target.innerText);
  };

  const navigate = useNavigate();
  return (
    <S.StepCertification>
      <S.StepCertificationScreen>
        <S.GoBackContainer>
          <GobackIcon MoveWhere={-1} NavigateFunc={navigate} />
          <S.StepCertificationTitle>단계별 인증</S.StepCertificationTitle>
        </S.GoBackContainer>
        <S.StepPoint>
          <StepTitlePoint StepNumber={1} />
          <StepTitleComponent title="품목 선택" />
        </S.StepPoint>
        <S.ContentList>
          {datas.map((data) => {
            return (
              <S.ContentButton
                onClick={handleClickButton}
                style={content === data.text ? { backgroundColor: data.backgroundColor, color: data.textColor } : {}}
                name={data.name}
                key={data.id}
              >
                <S.ContentText>{data.text}</S.ContentText>
              </S.ContentButton>
            );
          })}
        </S.ContentList>
        <S.Content>{content}</S.Content>
      </S.StepCertificationScreen>
    </S.StepCertification>
  );
};
