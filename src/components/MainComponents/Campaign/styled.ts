import styled from '@emotion/styled';

export const CampaignBox = styled.div`
  width: 100%;
  height: 140px;

  display: flex;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 4%) 0px 7px 10px 0px;
  background: linear-gradient(309deg, rgba(150, 222, 90, 1), rgba(196, 234, 99, 1));
  cursor: pointer;
`;

export const CampaignContainer = styled.div`
  display: flex;

  margin: 18px auto auto 18px;
`;
export const CampaignIcon = styled.img`
  height: 20px;
`;
export const CampaignText = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding-left: 8px;

  color: rgba(251, 252, 252, 1);
`;
