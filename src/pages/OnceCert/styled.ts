import styled from '@emotion/styled';

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
  height: 63vh;
  background-color: brown;
`;

export const Camera = styled.video`
  width: 100%;
  height: 100%;
`;

export const CameraSource = styled.source`
  width: 100%;
  height: 100%;
`;

export const CameraOptions = styled.section`
  width: 100%;

  display: flex;
`;

export const CaptureButton = styled.button`
  width: 65px;
  height: 65px;

  cursor: pointer;
  display: flex;
  margin: auto;
  border: none;
  border-radius: 40px;
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
`;

export const BlackCircle = styled.div`
  width: 55px;
  height: 55px;

  display: flex;
  margin: auto;
  border-radius: 40px;
  background-color: #000000;
`;

export const WhiteCenterCircle = styled.div`
  width: 49px;
  height: 49px;

  display: flex;
  margin: auto;
  border-radius: 40px;
  background-color: #ffffff;
`;

export const PictureCount = styled.div`
  width: 100%;
  padding: 25px 0 25px 0;

  font-size: 13px;
  font-weight: 600;
  text-align: center;
`;
