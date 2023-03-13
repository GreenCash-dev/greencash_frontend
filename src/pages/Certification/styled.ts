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
  display: flex;
  flex-direction: column;

  margin: auto;
  background-color: #ffffff;
`;

export const GoBackContainer = styled.div`
  display: flex;
  margin-top: 40px;
`;

export const OnceCertTitle = styled.div`
  color: #000000;
  font-size: 18px;
  font-weight: bold;
  margin-top: -3px;
  margin-left: 15px;
`;

export const OnceCertDesc = styled.div`
  color: #000000;
  font-size: 14.5px;
  font-weight: bold;

  line-height: 20px;
  margin-top: 30px;
`;

export const HowCanIContainer = styled.div`
  display: flex;
  margin-top: 35px;
`;
export const HowCanIHelpFont = styled.div`
  color: #818596;
  font-size: 13.5px;
  font-weight: bold;
`;
export const GoToStepCert = styled(NavLink)`
  color: #000000;
  font-size: 14px;
  font-weight: bold;
  margin: -1px 5px 0 5px;
`;

export const CapturedImgsContainer = styled.section`
  display: flex;
  margin-top: 20px;
`;

export const CanSeeCapturedImgs = styled.div`
  min-width: 90%;
  display: flex;
  margin: auto;
  overflow-x: auto;
`;

export const CapturedImg = styled.img`
  max-width: 225px;
  max-height: 300px;
  margin-right: 20px;
`;

export const ButtonContainer = styled.section`
  margin: auto 0 20px 0;
`;
