import styled from '@emotion/styled';

export const QuestionAnswerContainer = styled.div`
  width: 90%;
  height: 100vh;

  margin: auto;
  display: flex;
  flex-direction: column;
`;

export const GoBackContainer = styled.section`
  display: flex;
  margin-top: 40px;
`;

//#########faq

export const QnATitle = styled.div`
  color: #000000;
  font-size: 18px;
  font-weight: bold;
  margin-top: -3px;
  margin-left: 20px;
`;
export const QnAElement = styled.div`
  display: flex;
  flex-direction: column;
  & > * {
    cursor: pointer;
  }
`;

export const QnAContainer = styled.section`
  width: 100%;
  margin: 50px auto auto auto;

  display: flex;
  flex-direction: column;
`;
