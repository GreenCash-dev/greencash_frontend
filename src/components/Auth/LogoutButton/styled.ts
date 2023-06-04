import styled from '@emotion/styled';

export const LogoutContainer = styled.div`
  width: 75%;

  display: flex;
  margin: auto;
`;

export const LogoutFont = styled.button`
  margin: 30px 40px 0 auto;
  padding: 10px 20px 10px 20px;

  font-size: 14px;
  font-weight: bold;

  cursor: pointer;
  background-color: rgba(245, 245, 245, 1);
  border: none;
  border-radius: 10px;
  transition: background-color 0.2s, transform 0.2s;
  :active {
    transform: scale(0.95);
  }
  :hover {
    background-color: #ebf1eb;
  }

  font-family: Pretendard;
`;
