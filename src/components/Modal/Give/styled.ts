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

export const GiveSuccessModalBox = styled.div`
  width: 229px;
  height: 141px;

  line-height: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: #ffffff;
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
`;

export const GiveSuccessModalTitle = styled.span`
  text-align: center;
  font-size: 15px;
  font-weight: 600;
  color: #000000;
  margin-top: auto;
`;

export const GiveSuccessDescContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;

export const GiveSuccessModalDesc = styled.span`
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  color: #8b8e9f;
`;

export const GiveSuccessCloseButton = styled.button`
  width: 100%;
  height: 41px;

  border-top: 1px solid #e4e4e4;
  border-right: none;
  border-left: none;
  border-bottom: none;
  border-radius: 0 0 10px 10px;
  background-color: #ffffff;
`;

export const GiveSuccessCloseButtonText = styled.span`
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  color: #b3db0e;
`;
