import styled from '@emotion/styled';

export const MissionScreenContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
`;

export const MissionIllustration = styled.img`
  width: 100%;
`;

export const TouchHere = styled.div<{ THWidth: string; THHeight: string; marginLeft: string; marginTop: string }>`
  position: absolute;
  width: ${(props) => props.THWidth};
  height: ${(props) => props.THHeight};
  margin-left: ${(props) => props.marginLeft};
  margin-top: ${(props) => props.marginTop};
  cursor: pointer;
`;
