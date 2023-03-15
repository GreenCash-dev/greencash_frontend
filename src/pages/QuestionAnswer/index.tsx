import { GobackIcon, QnABox } from '@src/components';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './styled';

export const QuestionAndAnswerPage: React.FC = () => {
  const navigate = useNavigate();
  const [faqs, setFaqs] = useState([
    {
      question: 'Q. 모금된 캐시는 어디에 사용되나요?',
      answer: 'A. 일정량 모아진 캐시는 환경재단에 돈으로 환전되어 기부됩니다!',
      open: false,
    },
    {
      question: 'Q. 후원 활동은 어디서 확인하나요?',
      answer: 'A. 그린캐시 홈페이지를 방문해주세요!',
      open: false,
    },
    {
      question: 'Q. 캐시로 무엇을 할 수 있나요?',
      answer: 'A. 여러 캠페인과 캐시기부 및 친환경 제품을 구매하실 수 있어요!',
      open: false,
    },
  ]);
  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        }
        return faq;
      })
    );
  };
  return (
    <S.QuestionAnswerContainer>
      <S.GoBackContainer>
        <GobackIcon MoveWhere={-1} NavigateFunc={navigate} />
        <S.QnATitle>자주 묻는 질문</S.QnATitle>
      </S.GoBackContainer>
      <S.QnAContainer>
        {faqs.map((faq, idx) => {
          return (
            <S.QnAElement onClick={() => toggleFAQ(idx)} key={idx}>
              <QnABox faqArray={faq} />
            </S.QnAElement>
          );
        })}
      </S.QnAContainer>
    </S.QuestionAnswerContainer>
  );
};
