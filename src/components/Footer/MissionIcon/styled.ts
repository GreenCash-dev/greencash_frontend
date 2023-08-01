import styled from '@emotion/styled';

export const MissionIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 2px;
`;
export const MissionText = styled.div<{ MissionTextColor: string }>`
  color: ${(props) => (props.MissionTextColor === 'mission' ? '#acd60a' : '#D9D9D9')};
  font-size: 13px;
  font-weight: bold;
  margin-top: 7px;
`;
