import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const GiveBox = styled(NavLink)`
  height: 55px;

  margin: 0 auto auto 18px;
  display: flex;
  border-radius: 10px;
  box-shadow: rgba(0 0 0 / 4%) 0px 0px 10px 5px;
  cursor: pointer;

  text-decoration: none;
`;

export const GivePosition = styled.div`
  display: flex;
  margin: auto auto auto 15px;
`;

export const GiveIcon = styled.img`
  height: 22px;
`;
export const GiveText = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding-left: 8px;

  color: rgba(105, 123, 242, 1);
`;
