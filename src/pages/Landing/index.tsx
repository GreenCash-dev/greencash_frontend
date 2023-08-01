import React, { useEffect, useRef } from 'react';

import * as S from './styled';
import {
  Back_Bottom,
  Back_Desc,
  Gift,
  Guide,
  MainList,
  Mission,
  OneAbility,
  PreviewDesc,
  PreviewTitle,
  StepAbility,
  LandingStore,
  Title,
  TopNavbar,
} from '@src/components/Landing';
import { useScrollFadeIn } from '@src/hooks';
import { Campaign } from '@src/components/Main';

export const Landing: React.FC = () => {
  //이거 스크롤 할 때 정해진 Top 위치로 이동하기로
  //눌러서 섹션 이동하기 찾아보기
  //코드 컴포넌트로 줄이기
  const outerDivRef = useRef<HTMLDivElement>(document.createElement('div'));
  useEffect(() => {
    const wheelHandler = (e: WheelEvent) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치
      const pageHeight = window.innerHeight;
      console.log(pageHeight * (scrollTop / pageHeight + 1));
      if (deltaY > 0) {
        if (Math.round(scrollTop) === scrollTop / 2) {
          outerDivRef.current.scrollTo({
            top: pageHeight,
            behavior: 'smooth',
          });
        } else if (scrollTop > 740) {
          outerDivRef.current.scrollTo({
            top: pageHeight * (scrollTop / pageHeight + 1),
            behavior: 'smooth',
          });
        }
      } else if (deltaY < -5) {
        if (scrollTop === pageHeight) {
          outerDivRef.current.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        } else {
          outerDivRef.current.scrollTo({
            top: scrollTop - pageHeight,
            behavior: 'smooth',
          });
        }
      }
    };
    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent?.addEventListener('wheel', wheelHandler);
    return () => {
      outerDivRefCurrent?.removeEventListener('wheel', wheelHandler);
    };
  }, []);
  const Back_scrollAnimated = {
    0: useScrollFadeIn<HTMLHeadingElement>('up', 1, 0.5),
    1: useScrollFadeIn<HTMLHeadingElement>('up', 1, 1),
    2: useScrollFadeIn<HTMLHeadingElement>('up', 1, 1.2),
    3: useScrollFadeIn<HTMLHeadingElement>('up', 1, 1.4),
    4: useScrollFadeIn<HTMLHeadingElement>('up', 1, 1.5),
  };
  //코드 재활용성 높여보기
  const Preview_scrollAnimated = {
    0: useScrollFadeIn<HTMLHeadingElement>('up', 1, 0.5),
    1: useScrollFadeIn<HTMLHeadingElement>('up', 1, 1),
  };
  return (
    <S.MainContainer ref={outerDivRef}>
      <S.Inner>
        <S.MainLogo src="https://cdn.discordapp.com/attachments/1054718420651872266/1076443893282906192/Frame_4.png" />
      </S.Inner>
      <S.Inner>
        <S.DescContainer>
          <S.TitleContainer>
            <Title textAlign={'center'} TitleText="Background" />
          </S.TitleContainer>
          <S.Back_Desc_Container {...Back_scrollAnimated[0]}>
            <Back_Desc />
          </S.Back_Desc_Container>
          <S.Back_CircleContainer>
            <S.Back_Circle {...Back_scrollAnimated[1]} />
            <S.Back_Circle {...Back_scrollAnimated[2]} />
            <S.Back_Circle {...Back_scrollAnimated[3]} />
          </S.Back_CircleContainer>
          <S.Back_Bottom_Container {...Back_scrollAnimated[4]}>
            <Back_Bottom />
          </S.Back_Bottom_Container>
        </S.DescContainer>
      </S.Inner>
      <S.Inner>
        <S.PreviewSection>
          <S.PreviewTextContainer>
            <S.PreviewTitleContainer {...Preview_scrollAnimated[0]}>
              <PreviewTitle />
            </S.PreviewTitleContainer>
            <S.PreviewDescContainer {...Preview_scrollAnimated[1]}>
              <PreviewDesc />
            </S.PreviewDescContainer>
          </S.PreviewTextContainer>
          <S.PreviewImgContainer>
            <S.PreviewImg src="https://cdn.discordapp.com/attachments/1054718420651872266/1077596099168186468/Simple_Mockup_Free_Scene2_1.png" />
          </S.PreviewImgContainer>
        </S.PreviewSection>
      </S.Inner>
      <S.Inner>
        <S.MainListSection>
          <S.MainListTextContainer>
            <MainList />
          </S.MainListTextContainer>
          <S.MainListImgContainer>
            <S.MainListImg src="https://cdn.discordapp.com/attachments/1054718420651872266/1078144555699949669/1_1.png" />
          </S.MainListImgContainer>
        </S.MainListSection>
      </S.Inner>
      <S.Inner>
        <S.OneAbilitySection>
          <TopNavbar CirclePosition={1} marginTop="7rem" marginBottom="5rem" />
          <S.OneAbilityTextContainer>
            <OneAbility />
          </S.OneAbilityTextContainer>
          <S.OneAbilityImg src="https://cdn.discordapp.com/attachments/1054718420651872266/1078158130308993124/Frame_9.png" />
        </S.OneAbilitySection>
      </S.Inner>
      <S.Inner>
        <S.StepAbilitySection>
          <S.StepAbilityTextContainer>
            <Title textAlign={'none'} TitleText="단계별 인증" />
            <StepAbility />
          </S.StepAbilityTextContainer>
          <S.StepAbilityImg src="https://cdn.discordapp.com/attachments/1054718420651872266/1078186504796520540/Frame_10.png" />
        </S.StepAbilitySection>
      </S.Inner>
      <S.Inner>
        <S.GuideSection>
          <TopNavbar CirclePosition={1} marginTop="3rem" marginBottom="5rem" />
          <S.GuideTextContainer>
            <Title textAlign={'none'} TitleText="가이드라인" />
            <Guide />
          </S.GuideTextContainer>
          <S.GuideImgContainer>
            <S.GuideLineImg src="https://cdn.discordapp.com/attachments/1054718420651872266/1078333370460815390/image_20.png" />
            <S.GuideLineDetailImg src="https://cdn.discordapp.com/attachments/1054718420651872266/1078333522227499189/0014_1.png" />
          </S.GuideImgContainer>
        </S.GuideSection>
      </S.Inner>
      <S.Inner>
        <S.CampaignSection>
          <S.CampaignTextContainer>
            <Title textAlign={'none'} TitleText="캠페인" />
            <Campaign />
          </S.CampaignTextContainer>
          <S.CampaignImgContainer>
            <S.CampaignImg src="https://cdn.discordapp.com/attachments/1054718420651872266/1078571338463203388/faeff604a99d037b.png" />
          </S.CampaignImgContainer>
        </S.CampaignSection>
      </S.Inner>
      <S.Inner>
        <S.StoreSection>
          <TopNavbar CirclePosition={1} marginTop="-1rem" marginBottom="5rem" />
          <S.StoreTextContainer>
            <Title textAlign={'right'} TitleText="스토어" />
            <LandingStore />
          </S.StoreTextContainer>
          <S.StoreImgContainer>
            <S.StoreImg src="https://cdn.discordapp.com/attachments/1054718420651872266/1078588928241704960/Frame_11.png" />
          </S.StoreImgContainer>
        </S.StoreSection>
      </S.Inner>
      <S.Inner>
        <S.GiftSection>
          <S.GiftTextContainer>
            <Title textAlign="none" TitleText="기부하기" />
            <Gift />
          </S.GiftTextContainer>
          <S.GiftImgContainer>
            <S.GiftImg src="https://cdn.discordapp.com/attachments/1054718420651872266/1079073240212832286/Frame_12.png" />
          </S.GiftImgContainer>
        </S.GiftSection>
      </S.Inner>
      <S.Inner>
        <S.MissionSection>
          <TopNavbar CirclePosition={2} marginTop="7rem" marginBottom="5rem" />
          <S.MissionTextContainer>
            <Title textAlign="none" TitleText="미션" />
            <Mission />
          </S.MissionTextContainer>
          <S.MissionImgContainer>
            <S.MissionImg src="https://cdn.discordapp.com/attachments/1054718420651872266/1079221945175920671/Flying_iPhone_X_Mockups_1.png" />
          </S.MissionImgContainer>
        </S.MissionSection>
      </S.Inner>
    </S.MainContainer>
  );
};
