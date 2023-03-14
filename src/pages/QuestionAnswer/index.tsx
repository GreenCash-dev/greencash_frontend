import { GobackIcon } from '@src/components';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './styled';

export const QuestionAndAnswerPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <S.QuestionAnswerContainer>
      <S.GoBackContainer>
        <GobackIcon MoveWhere={-1} NavigateFunc={navigate} />
      </S.GoBackContainer>
    </S.QuestionAnswerContainer>
  );
};
