import styled from '@emotion/styled';

export const MissionProgessContainer = styled.div`
  width: 75%;

  display: flex;
  flex-direction: column;

  margin: 0 auto 0 auto;
`;

export const MissionProgressTop = styled.div`
  display: flex;

  margin-top: 25px;
`;
export const MissionProgressCheckbox = styled.img`
  width: 13px;
  height: 13px;

  margin-right: 10px;
`;
export const MissionProgressTitle = styled.span`
  font-size: 15px;
  font-weight: 500;

  color: #000;
`;

export const MissionProgressBottom = styled.div`
  display: flex;

  margin-top: 15px;
`;
export const MissionProgress = styled.progress`
  appearance: none;
  width: 85%;
  height: 6px;
  ::-webkit-progress-bar {
    background: #f0f0f0;
    border-radius: 10px;
    box-shadow: inset 3px 3px 10px #ccc;
  }
  ::-webkit-progress-value {
    border-radius: 10px;
    background: #b0d90c;
  }
`;
export const MissionProgressPercent = styled.span`
  font-size: 12px;
  font-weight: 500;

  color: rgba(100, 100, 100, 1);
  margin-left: auto;
  margin-right: 0;
  margin-top: -3px;
`;
