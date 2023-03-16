import styled from '@emotion/styled';

export const CardElement = styled.div`
  width: 100%;
  height: 270px;

  display: flex;
  flex-direction: column;
  border-radius: 10px 10px 0 0;
`;

export const CardElementImg = styled.div`
  height: 186px;
  border-radius: 10px 10px 0 0;
  background-size: cover;
  background-image: url(https://cdn.imweb.me/thumbnail/20210303/6a57ec631c63c.jpg);
`;

export const CardElementBottomData = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 84px;

  border-radius: 0 0 10px 10px;
  background-color: #ffffff;
`;

export const CardElementCampaignTitleContainer = styled.div``;
export const CardElementCampaignTitle = styled.strong`
  font-size: 17px;
  font-weight: bold;
  text-align: center;
`;

export const CampaignInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
`;
export const CampaignPeriodCashContainer = styled.div`
  display: flex;
  margin-top: 12px;
`;

export const PeriodText = styled.span`
  font-size: 15px;
  font-weight: 600;
  text-align: left;

  color: #8b8e9f;
`;

//cash
export const YouCanGetCash = styled.div`
  display: flex;
  margin: 0 0 0 auto;
`;
export const CashIcon = styled.div`
  width: 12px;
  height: 12px;

  border: 2px solid rgba(185, 222, 42, 1);
  border-radius: 10px;

  margin: auto;
  margin-left: 10px;
  margin-right: 0;
`;
export const CashIconC = styled.div`
  font-size: 13px;
  text-align: center;
  color: rgba(185, 222, 42, 1);

  margin-top: -2.5px;
  margin-right: 1px;
`;

export const CashValue = styled.span`
  font-size: 15px;
  font-weight: bold;
  color: rgba(185, 222, 42, 1);

  margin: auto;
  margin-left: 4px;
`;
