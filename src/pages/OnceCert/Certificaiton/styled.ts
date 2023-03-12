import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const OnceCertificationBackground = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  background-color: #ffffff;
`;

export const OnceCertScreen = styled.div`
  width: 90%;
  height: 100vh;

  margin: auto;
  background-color: #ffffff;
`;

export const GoBackContainer = styled.div`
  display: flex;
  margin-top: 25px;
`;

export const OnceCertTitle = styled.div`
  color: #000000;
  font-size: 16px;
  font-weight: bold;
`;

export const OnceCertDesc = styled.div`
  color: #000000;
  font-size: 13.5px;
  font-weight: bold;

  line-height: 20px;
  margin-top: 25px;
`;

export const HowCanIContainer = styled.div`
  display: flex;
  margin-top: 35px;
`;
export const HowCanIHelpFont = styled.div`
  color: #818596;
  font-size: 13px;
  font-weight: bold;
`;
export const GoToStepCert = styled(NavLink)`
  color: #000000;
  font-size: 14px;
  font-weight: bold;
  margin: -1px 5px 0 5px;
`;
