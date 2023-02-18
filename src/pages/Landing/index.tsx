import React, { EventHandler, useEffect, useRef, useState } from 'react';

import * as S from './styled';

export const Landing: React.FC = () => {
  const outerDivRef = useRef<HTMLDivElement>(document.createElement('div'));
  useEffect(() => {
    const wheelHandler = (e: WheelEvent) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치
      const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.
      console.log(scrollTop, pageHeight);
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
        if (scrollTop < 700) {
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
  return (
    <S.MainContainer ref={outerDivRef}>
      <S.Inner style={{ background: 'black' }}>
        <S.MainLogo src="https://cdn.discordapp.com/attachments/1054718420651872266/1076443893282906192/Frame_4.png" />
      </S.Inner>
      <S.Inner style={{ background: 'red' }}>
        <S.MainLogo src="https://cdn.discordapp.com/attachments/1054718420651872266/1076443893282906192/Frame_4.png" />
      </S.Inner>
      <S.Inner style={{ background: 'blue' }}>
        <S.MainLogo src="https://cdn.discordapp.com/attachments/1054718420651872266/1076443893282906192/Frame_4.png" />
      </S.Inner>
      <S.Inner style={{ background: 'green' }}>
        <S.MainLogo src="https://cdn.discordapp.com/attachments/1054718420651872266/1076443893282906192/Frame_4.png" />
      </S.Inner>
    </S.MainContainer>
  );
};
