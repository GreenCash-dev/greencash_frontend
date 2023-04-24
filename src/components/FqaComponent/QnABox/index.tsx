import React from 'react';
import styled from '@emotion/styled';

interface ClickFuncProps {
  faqArray: { question: string; answer: string; open: boolean };
}

export const QnABox: React.FC<ClickFuncProps> = ({ faqArray }) => {
  return (
    <>
      <QuestionElement clickthis={faqArray.open}>
        <QuestionText clickthis={faqArray.open}>{faqArray.question}</QuestionText>
      </QuestionElement>
      <AnswerElement clickthis={faqArray.open}>
        <AnswerElementText clickthis={faqArray.open}>
          {faqArray.answer.slice(0, 25)} <br />
          {faqArray.answer.slice(25, -1)}
        </AnswerElementText>
      </AnswerElement>
    </>
  );
};

//qna

export const QuestionElement = styled.button<{ clickthis: boolean }>`
  width: 315px;
  height: 55px;
  :after {
    height: 110px;
  }

  display: flex;
  flex-direction: column;
  margin: 25px auto 20px auto;

  transition: all 0.2s ease 0s;
  border: none;
  border-radius: ${(props) => (props.clickthis ? '10px 10px 0 0' : '10px')};
  background-color: ${(props) => (props.clickthis ? '#0f131e' : '#ffffff')};
  box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 10px 2px;
`;

export const QuestionText = styled.div<{ clickthis: boolean }>`
  color: ${(props) => (props.clickthis ? '#ffffff' : '#535353')};

  margin: auto;
  text-align: center;
  font-size: 15px;
  font-weight: bold;
`;

export const AnswerElement = styled.div<{ clickthis: boolean }>`
  width: 315px;
  height: ${(props) => (props.clickthis ? '60px' : '0')};
  display: flex;

  transition: 0.2s ease-out 0s;
  margin: -20px auto 0 auto;
  border-radius: 0 0 10px 10px;
  background-color: #0f131e;
`;

export const AnswerElementText = styled.div<{ clickthis: boolean }>`
  ${(props) => (props.clickthis ? '' : 'display: none')};
  color: ${(props) => (props.clickthis ? '#ffffff' : '0')};
  margin: auto;
  font-size: 14px;
  line-height: 20px;
`;
