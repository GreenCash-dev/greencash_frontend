import styled from '@emotion/styled';

export const CampaignContainer = styled.article`
  width: 90%;
  height: 100vh;

  margin: auto;
  display: flex;
  flex-direction: column;
`;
export const GoBackSection = styled.section`
  display: flex;
  margin-top: 40px;
  margin-bottom: 30px;
`;

export const CampaignTitle = styled.strong`
  color: #000000;
  font-size: 18px;
  font-weight: bold;
  margin-top: -3px;
  margin-left: 20px;
`;

export const ChooseMenuSection = styled.section``;
export const CampaignDescSection = styled.section`
  margin-top: 30px;
  margin-bottom: 20px;
`;

export const CampaignsSection = styled.section`
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;
export const CampaignElementContaienr = styled.div`
  margin: 0 0 40px 0;
`;
