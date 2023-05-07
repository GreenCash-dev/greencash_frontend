import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GobackIcon } from '@src/components';
import { StepTitleComponent, StepTitlePoint } from '@src/components/StepCertificationComponent';
import * as S from './styled';

export const StepCertificationPage: React.FC = () => {
  const [content, setContent] = useState<string>('');
  const [selectContent, setSelectContent] = useState<boolean>(false);
  const selectContentRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!selectContentRef.current) return;
    else {
      selectContentRef.current.style.backgroundColor = selectContent ? '#141B3D' : '#f5f6f5';
      selectContentRef.current.style.color = selectContent ? '#f5f6f5' : '#141B3D';
    }
  }, []);
  const handleClickButton = (e) => {
    setContent(e.target.innerText);
    setSelectContent(!selectContent);
    console.log(selectContent);
  };
  interface datasTypes {
    id: number;
    text: string;
    name: string;
  }
  const datas: datasTypes[] = [
    {
      id: 1,
      text: '종이류',
      name: 'one',
    },
    {
      id: 2,
      text: '종이팩류',
      name: 'two',
    },
  ];
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
              <S.ContentButton onClick={handleClickButton} name={data.name} key={data.id}>
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
