import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const DescTitle = styled.span`
  color: #86899b;
  font-size: 12px;
  font-weight: bold;

  text-align: left;
`;

export const DescDetailData = styled(NavLink)`
  width: 110px;
  height: 15px;
  color: #000000;
  font-weight: bold;
  font-size: 12.5px;

  text-decoration: none;
  border-bottom: 1.7px solid #000000;
`;
