import React, { useEffect, useRef } from 'react';

import * as S from './styled';
import { Back_Bottom, Back_Desc, PreviewDesc, PreviewTitle, Title } from '@src/components';
import { useScrollFadeIn } from '@src/hooks';

export const Landing: React.FC = () => {
  const outerDivRef = useRef<HTMLDivElement>(document.createElement('div'));
  useEffect(() => {
    const wheelHandler = (e: WheelEvent) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치
      if (deltaY > 0) {
        if (Math.round(scrollTop) === scrollTop / 2) {
          outerDivRef.current.scrollTo({
            top: scrollTop + 753,
            left: 0,
            behavior: 'smooth',
          });
        } else if (scrollTop > 740) {
          outerDivRef.current.scrollTo({
            top: scrollTop + 753,
            left: 0,
            behavior: 'smooth',
          });
        }
      } else if (deltaY < -5) {
        if (scrollTop < 730) {
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
        } else {
          outerDivRef.current.scrollTo({
            top: scrollTop - 753,
            left: 0,
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
            <Title TitleText="Background" />
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
      <S.Inner></S.Inner>
    </S.MainContainer>
  );
};
