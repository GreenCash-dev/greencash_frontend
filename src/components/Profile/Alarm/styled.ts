import styled from '@emotion/styled';

export const AlarmBox = styled.div`
  width: 75%;
  height: 78px;

  border-radius: 10px;
  background-color: #fff;

  display: flex;
  margin: 12px auto 0 auto;
`;

export const AlarmDataPosition = styled.div`
  width: 258px;

  display: flex;
  margin: auto;
`;

export const AlarmBoxTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const AlarmBoxTitle = styled.strong`
  font-size: 15px;
  font-weight: 500;
`;
export const AlarmBoxText = styled.span`
  margin-top: 6px;

  font-size: 11px;
  font-weight: 400;
  letter-spacing: 0.06em;

  color: #7a7e91;
`;

export const AlarmToggleContainer = styled.div`
  margin: auto 0 auto auto;
`;
export const AlarmToggleLabel = styled.label<{ toggleBoolean: boolean }>`
  width: 50px;
  height: 25px;
  display: block;
  position: relative;

  border-radius: 30px;
  background-color: ${(props) => (props.toggleBoolean ? '#7384F3' : '#D8D9D9')};
  cursor: pointer;

  transition: all 0.2s ease-in;
`;
export const AlarmToggleSpan = styled.span<{ toggleBoolean: boolean }>`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  left: ${(props) => (props.toggleBoolean ? 'calc(100% - 22px)' : '4px')};

  border-radius: 50%;
  background: ${(props) => (props.toggleBoolean ? '#fff' : '#FCFDFD')};

  transform: translateY(-50%);
  transition: all 0.2s ease-in;
`;
