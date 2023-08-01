import React from 'react';

import * as S from './styled';

interface QuestionProps {
  ImageSrc: string;
}

export const Question: React.FC<QuestionProps> = ({ ImageSrc }) => {
  return (
    <S.QuestionBox to="qna">
      <S.QuestionPosition>
        <S.QuestionIcon src={ImageSrc} />
        <S.QuestionText>자주 물어보는 질문</S.QuestionText>
      </S.QuestionPosition>
    </S.QuestionBox>
  );
};
