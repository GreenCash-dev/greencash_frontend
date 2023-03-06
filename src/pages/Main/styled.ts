import styled from '@emotion/styled';

export const MainScreen = styled.main`
  position: relative;
  width: 100%;
`;

export const Menus = styled.section`
  width: 88%;
  margin: auto;
  & > * {
    //자식 스타일
    margin-bottom: 20px;
  }
`;

export const CashOnHandContainer = styled.section`
  margin-top: 15px;
  margin-bottom: 15px;
  display: flex;
`;
export const CashOnHandPosition = styled.div`
  margin: auto;
  margin-right: 0;
`;

export const OnecCertificationContainer = styled.section``;
export const StepCertificationContainer = styled.section``;
export const GuideLineContainer = styled.section``;

export const InteractionContainer = styled.section`
  display: flex;
`;
export const CampaignContainer = styled.div`
  width: 100%;
`;
export const StoreGiveContainer = styled.div`
  width: 100%;
`;
export const StoreContainer = styled.div`
  width: 100%;
`;
export const DoGiveContainer = styled.div`
  margin-top: 20px;
`;

export const QAContainer = styled.section`
  width: 100%;
`;
//Footer
export const FooterBox = styled.footer`
  bottom: 0;
  width: 100%;
  height: 70px;
  display: flex;
  position: sticky;

  background-color: #ffffff;
  z-index: 99;
`;

export const FooterContainer = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  & > * {
    //자식 스타일
    cursor: pointer;
    margin: auto;
  }
`;

export const FooterMainIconContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const FooterMissionIconContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const FooterSearchIconContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const FooterProfileIconContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
