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
