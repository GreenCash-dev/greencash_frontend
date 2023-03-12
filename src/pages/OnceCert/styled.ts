import styled from '@emotion/styled';
import Webcam from 'react-webcam';

export const OnceCertScreen = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  margin: auto;
  background-color: #ffffff;
`;

export const GoBackContainer = styled.section`
  width: 90%;
  display: flex;
  margin: 25px auto 25px auto;
`;

export const CameraScreen = styled.section`
  width: 100%;
  height: 70vh;
  background-color: brown;
`;

export const CameraOptions = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const CaptureButton = styled.button`
  width: 70px;
  height: 70px;

  display: flex;
  margin: auto;
  border: none;
  border-radius: 40px;
  background-color: #ffffff;
  box-shadow: 1px 1px 6px 3px rgba(0, 0, 0, 0.24);
`;

export const BlackCircle = styled.div`
  width: 65px;
  height: 55px;

  display: flex;
  margin: auto;
  border-radius: 40px;
  background-color: #000000;
`;

export const WhiteCenterCircle = styled.div`
  width: 50px;
  height: 50px;

  display: flex;
  margin: auto;
  border-radius: 40px;
  background-color: #ffffff;
`;
