import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const QuestionBox = styled(NavLink)`
  width: 100%;
  height: 65px;
  display: flex;

  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 4%) 0px 7px 10px 0px;
  background-color: #ffffff;
  cursor: pointer;

  text-decoration: none;
`;

export const QuestionPosition = styled.div`
  display: flex;
  margin: auto auto auto 18px;
`;
export const QuestionIcon = styled.img`
  height: 20px;
`;
export const QuestionText = styled.div`
  color: rgba(0, 0, 0, 1);
  font-size: 18px;
  font-weight: bold;
  margin-left: 15px;
`;
