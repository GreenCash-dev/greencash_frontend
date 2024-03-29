import styled from '@emotion/styled';

export const MainContainer = styled.div`
  height: 100vh;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const MainLogo = styled.img`
  width: 495px;
  height: 149px;
  margin: auto;
`;

export const Inner = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DescContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleContainer = styled.div`
  margin-top: -6rem;
  margin-bottom: 13rem;
`;

//background**********************************
export const Back_Desc_Container = styled.div``;
export const Back_Bottom_Container = styled.div``;
export const Back_CircleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`;

export const Back_Circle = styled.div`
  width: 5px;
  height: 5px;
  margin: 0.5rem 0 0.5rem 0;
  background: #d9d9d9;
  border-radius: 10px;
`;
//*********************************/
//Preview*************************************
export const PreviewSection = styled.div`
  width: 100%;
  display: flex;
  position: relative;
`;

export const PreviewTextContainer = styled.div`
  position: absolute;
  margin-top: 10rem;
  margin-left: 12rem;
`;
export const PreviewImgContainer = styled.div`
  width: 100%;
`;

export const PreviewTitleContainer = styled.div`
  margin-bottom: 3rem;
`;
export const PreviewDescContainer = styled.div``;

export const PreviewImg = styled.img`
  float: right;
  height: 100vh;
`;
/******************** */

/*************MainListImg***********/
export const MainListSection = styled.div`
  width: 100%;
  display: flex;
  position: relative;
`;
export const MainListImg = styled.img`
  margin: auto;
  height: 100vh;
`;
export const MainListTextContainer = styled.div`
  position: absolute;
`;
export const MainListImgContainer = styled.div`
  width: 100%;
  display: flex;
`;
/***************** */

/****************OneAbility ****************/
export const OneAbilitySection = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  width: 1088px;
`;
export const OneAbilityTextContainer = styled.div`
  position: absolute;
  margin-top: 18rem;
`;

export const OneAbilityImg = styled.img``;

/**************************************** */

/*********************StepAbility******************** */
export const StepAbilitySection = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 80%;
`;

export const StepAbilityImg = styled.img`
  width: 90%;
  margin: auto;
`;
export const StepAbilityTextContainer = styled.div`
  position: absolute;
  margin: 12rem 0 0 0;
`;
/*************************************** */

/*****************guide****************** */
export const GuideSection = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  position: relative;

  height: 100%;
`;

export const GuideTextContainer = styled.div`
  position: absolute;

  margin-left: -20rem;
  margin-top: 18rem;
`;

export const GuideImgContainer = styled.div`
  margin: auto;
  margin-bottom: 0;
`;
export const GuideLineImg = styled.img`
  height: 60vh;
  margin-left: 20rem;
`;
export const GuideLineDetailImg = styled.img`
  height: 75vh;
`;

/*********************Guide********************* */

/*******************Campaign********************* */
export const CampaignSection = styled.div`
  width: 85%;

  display: flex;
  position: relative;
`;
export const CampaignTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;

  margin-top: 66vh;
`;
export const CampaignImgContainer = styled.div`
  margin: auto;
`;

export const CampaignImg = styled.img`
  height: 85vh;
`;
/**************************** */
/*******************Store********************* */
export const StoreSection = styled.div`
  width: 1088px;
  display: flex;
  flex-direction: column;

  position: relative;
`;

export const StoreTextContainer = styled.div`
  position: absolute;
  width: 100%;

  margin-top: 7rem;
  margin-left: 15rem;
`;

export const StoreImgContainer = styled.div`
  margin: auto;
`;
export const StoreImg = styled.img`
  height: 75vh;
`;
/************************************* */
/***********************Gift************************* */
export const GiftSection = styled.div`
  display: flex;
  position: relative;

  width: 80%;
`;

export const GiftTextContainer = styled.div`
  position: absolute;

  margin-top: 9rem;
`;
export const GiftImgContainer = styled.div`
  margin-left: 40rem;
`;

export const GiftImg = styled.img`
  height: 90vh;
`;
/********************************************8 */
/*********************Mission*********************** */
export const MissionSection = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  width: 1088px;
`;

export const MissionTextContainer = styled.div`
  position: absolute;
  margin-top: 15rem;
  margin-left: -10rem;
`;

export const MissionImgContainer = styled.div`
  margin: auto;
`;
export const MissionImg = styled.img`
  height: 85vh;
  margin-left: 10rem;
`;
