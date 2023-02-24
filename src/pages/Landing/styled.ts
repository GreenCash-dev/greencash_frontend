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
`;
export const OneAbilityTextContainer = styled.div`
  position: absolute;
  margin-top: 18rem;
`;
export const OneAbilityImgContainer = styled.div`
  margin-bottom: -8rem;
`;

export const OneAbilityImg = styled.img`
  height: 85vh;
`;

/**************************************** */

/*********************StepAbility******************** */
export const StepAbilitySection = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 80%;
`;

export const StepAbilityImg = styled.img`
  width: 939px;
  height: 90vh;
  margin: auto;
`;
export const StepAbilityTextContainer = styled.div`
  position: absolute;
  margin: 9rem 0 0 0;
`;
/*************************************** */

/*****************guide****************** */
export const GuideSection = styled.div`
  width: 1088px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const GuideTextContainer = styled.div`
  position: absolute;

  margin-left: -10rem;
  margin-top: 12rem;
`;

export const GuideLineImg = styled.img`
  height: 70vh;
  margin-left: 20rem;
`;
export const GuideLineDetailImg = styled.img`
  height: 80vh;
`;

export const GuideImgContainer = styled.div`
  height: 77vh;

  margin: auto;
`;
/*********************Guide********************* */

/*******************Campaign********************* */
export const CampaignSection = styled.div`
  width: 87%;

  display: flex;
  position: relative;
`;
export const CampaignTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;

  margin-top: 47.5rem;
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
  margin-left: 3rem;
`;

export const StoreImgContainer = styled.div`
  margin: auto;
`;
export const StoreImg = styled.img`
  height: 75vh;
`;
