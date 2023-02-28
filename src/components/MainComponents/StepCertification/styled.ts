import styled from '@emotion/styled';

export const StepCertificationBox = styled.div`
  width: 100%;
  height: 60px;
  display: flex;

  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 4%) 0px 7px 10px 0px;
  background-color: #ffffff;

  margin-top: 16px;
`;

export const CertificationListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 25.5px;
`;
export const CertificationListOneLine = styled.div`
  display: flex;
  margin-left: 20px;
  margin-bottom: 2.1px;
`;
export const CertificationDot = styled.div`
  width: 2.8px;
  height: 2.8px;

  border-radius: 3px;
  background-color: rgba(0, 0, 0, 0.8);
`;
export const CertificationVertical = styled.div`
  width: 12px;
  height: 2.8px;

  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.8);
  margin-left: 2px;
`;

export const CertificationText = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding-top: 21px;
  margin-left: 15px;
`;

export const StateContainer = styled.div`
  display: flex;
  padding-top: 28px;
  margin-left: 70px;
`;
export const StateDot = styled.div<{ success: boolean; state: boolean }>`
  width: ${(props) => (props.state ? '74px' : '6.5px')};
  height: 6.5px;
  border-radius: 5px;

  margin-right: 6px;
  background-color: ${(props) => (props.success ? 'rgba(229, 52, 124, 1)' : 'rgba(225, 226, 226, 1)')};
`;
export const StateBar = styled.div``;
