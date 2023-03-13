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

export const SuccessCertificationModalBox = styled.div`
  width: 230px;
  height: 180px;

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

export const SuccessCertificationModalTitle = styled.span`
  text-align: center;
  font-size: 15px;
  font-weight: 600;
  color: #000000;
  margin-top: auto;
`;

export const SuccessCertificationDescContainer = styled.div`
  margin-top: 5px;
  display: flex;
`;

export const AboutCashContainer = styled.div`
  display: flex;
`;
export const YouGetCash = styled.img`
  width: 12px;
  height: 12px;

  margin-top: 5px;
  margin-right: 3px;
`;
export const HowMuchCash = styled.div`
  text-align: center;
  font-size: 12.5px;
  font-weight: bold;
  color: #000000;
`;

export const SuccessCertificationModalDesc = styled.span`
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  color: #8b8e9f;
`;

export const SuccessCertificationCloseButton = styled.button`
  width: 100%;
  height: 41px;

  border-top: 1px solid #e4e4e4;
  border-right: none;
  border-left: none;
  border-bottom: none;
  border-radius: 0 0 10px 10px;
  background-color: #141c3d;
  cursor: pointer;
`;

export const SuccessCertificationCloseButtonText = styled.span`
  text-align: center;
  font-size: 15px;
  font-weight: bold;
  color: #ffffff;
`;

export const ChooseGoingWhere = styled.section`
  display: flex;
  margin-top: 10px;
`;

export const GoHereContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
`;
export const GoWhereText = styled.div`
  text-align: center;

  font-size: 10px;
  font-weight: 600;
`;

export const WhereYouGoingIcon = styled.img`
  width: 18px;
  height: 18px;
  margin: auto;
`;

export const GoStoreButton = styled.button`
  width: 43px;
  height: 43px;

  display: flex;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;

  :hover {
    border: 1px solid #000000;
  }
  border: none;
  cursor: pointer;
  border-radius: 10px;
  background-color: #ffffff;
`;
export const GoDoGiveButton = styled.button`
  width: 43px;
  height: 43px;

  display: flex;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;

  :hover {
    border: 1px solid #000000;
  }
  border: none;
  cursor: pointer;
  border-radius: 10px;
  background-color: #ffffff;
`;
