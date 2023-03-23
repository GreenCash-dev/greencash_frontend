import React, { MouseEventHandler, SetStateAction } from 'react';

import * as S from './styled';

interface MissionProps {
  Illustration: string;
  isReponsive: boolean;
  ModalOpenOnClick: any;
}

export const MissionScreenComponent: React.FC<MissionProps> = ({ Illustration, isReponsive, ModalOpenOnClick }) => {
  return (
    <S.MissionScreenContainer>
      <S.MissionIllustration src={Illustration} />
      <S.TouchHere
        onClick={() =>
          ModalOpenOnClick(
            '공공시설 이용하기',
            '공동자원을 아껴보아요',
            300,
            '자원낭비는 각자가 전기를 사용할 때 발생해요',
            '집 대신 밖에서 자원을 이용하고 캐시를 지급받으세요.'
          )
        }
        THWidth="30px"
        THHeight="30px"
        marginLeft={isReponsive ? '4.5rem' : '4rem'}
        marginTop="24vh"
      />
      <S.TouchHere
        onClick={() =>
          ModalOpenOnClick(
            '에코백 사용하기',
            '봉투말고 에코백을 사용해 담아보세요',
            200,
            '많은 비닐봉투는 바다쓰레기가 되고 있어요',
            '에코백 사용으로 캐시를 지급 받으세요.'
          )
        }
        THWidth="30px"
        THHeight="50px"
        marginLeft="2.5rem"
        marginTop="35.5vh"
      />
      <S.TouchHere
        onClick={() =>
          ModalOpenOnClick(
            '전원끄기',
            '전기 플러그 및 전원을 종료해요',
            100,
            '쓰지 않는 전기가 소모되고 있어요!',
            '쓰지 않는 코드와 전원을 끄고 캐시를 지급받으세요!'
          )
        }
        THWidth="30px"
        THHeight="40px"
        marginLeft="1rem"
        marginTop="69vh"
      />
      <S.TouchHere
        onClick={() =>
          ModalOpenOnClick(
            '하루 1000보 걷기',
            '건강을 유지해보아요!',
            300,
            '매일 규칙적인 걷기는 건강에 좋습니다!',
            '걷고 캐시를 지급 받으세요!'
          )
        }
        THWidth="30px"
        THHeight="65px"
        marginLeft={isReponsive ? '13.5rem' : '12rem'}
        marginTop="76vh"
      />
      <S.TouchHere
        onClick={() =>
          ModalOpenOnClick(
            '물수건/물걸레 사용하기',
            '밀티슈 대신 물걸레로 청소해요',
            300,
            '물티슈는 환경오염의 주범이에요!',
            '물티슈 대신 물수건 혹은 물걸레를 청소하고 캐시를 지급받으세요.'
          )
        }
        THWidth="30px"
        THHeight="40px"
        marginLeft={isReponsive ? '13rem' : '11.5rem'}
        marginTop="48.5vh"
      />
      <S.TouchHere
        onClick={() =>
          ModalOpenOnClick(
            '친환경 제품 이용하기',
            '라벨없는 페트병, 친환경 브랜드를 이용해요!',
            200,
            '매번 생산할 때 버려지는 쓰레기들이 많아지고 있어요!',
            '친환경적인 제품을 구매하여 인증하고 캐시를 지급받으세요.'
          )
        }
        THWidth="30px"
        THHeight="35px"
        marginLeft={isReponsive ? '21.3rem' : '19.4rem'}
        marginTop="49vh"
      />
      <S.TouchHere
        onClick={() =>
          ModalOpenOnClick(
            '자전거 타고 이동해보세요!',
            '짧은 거리를 자전거를 타고 운동겸 이동해보아요',
            200,
            '자가용의 매연은 대기오염에 주범이에요!',
            '자가용 대신 짧은 거리를 자전거로 타고 캐시를 지급받으세요.'
          )
        }
        THWidth="35px"
        THHeight="50px"
        marginLeft={isReponsive ? '17rem' : '15.5rem'}
        marginTop="19vh"
      />
    </S.MissionScreenContainer>
  );
};
