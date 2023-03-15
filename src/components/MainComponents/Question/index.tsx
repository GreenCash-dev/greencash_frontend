import React from 'react';

import * as S from './styled';
import QuestionIcon from '@assets/Question.svg';

export const Question: React.FC = () => {
  return (
    <S.QuestionBox to="qna">
      <S.QuestionPosition>
        <S.QuestionIcon src={QuestionIcon} />
        <S.QuestionText>자주 물어보는 질문</S.QuestionText>
      </S.QuestionPosition>
    </S.QuestionBox>
  );
};
