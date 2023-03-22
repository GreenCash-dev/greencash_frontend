import styled from '@emotion/styled';

export const ModalWarp = styled.div`
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
`;

export const MissionModalBox = styled.div`
  width: 100%;
  height: 280px;

  line-height: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 15px 15px 0 0;
  background-color: #ffffff;

  margin: auto auto 0 auto;
  z-index: 100000;
`;

export const MissionWarpContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;

  margin: auto auto 0 auto;
`;

export const MissionTopContainer = styled.div`
  display: flex;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const MissionTitle = styled.strong`
  font-size: 20px;
  font-weight: 600;
  color: #000000;
  text-align: left;
`;

export const MissionDesc = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #d9d9d9;
  text-align: left;

  margin-top: 5px;
`;
export const YouCanGetCashContainer = styled.div`
  margin: 0 0 0 auto;
`;

//MissionInfoStyle
export const MissionInfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 30px;
`;

export const MissionInfoPoint = styled.strong`
  font-size: 15px;
  font-weight: 600;
  color: #000000;
`;
export const MissionInfoDesc = styled.span`
  font-size: 15px;
  font-weight: 600;
  color: #aaaaaa;
`;

//mission Button
export const MissionButtonContainer = styled.div`
  width: 100%;
  margin: auto auto 20px auto;
`;
export const MissionButton = styled.button`
  width: 100%;
  height: 50px;
  background: #9ed964;
  border: none;
  border-radius: 10px;

  cursor: pointer;
`;

export const MissionButtonText = styled.strong`
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
  text-align: center;
`;
