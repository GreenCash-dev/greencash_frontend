import React, { MouseEventHandler } from 'react';

import * as S from './styled';

interface MissionProps {
  Illustration: string;
  isReponsive: boolean;
  ModalOpenOnClick: MouseEventHandler;
}

export const MissionScreenComponent: React.FC<MissionProps> = ({ Illustration, isReponsive, ModalOpenOnClick }) => {
  return (
    <S.MissionScreenContainer>
      <S.MissionIllustration src={Illustration} />
      <S.TouchHere
        onClick={ModalOpenOnClick}
        THWidth="30px"
        THHeight="30px"
        marginLeft={isReponsive ? '4.5rem' : '4rem'}
        marginTop="24vh"
      />
      <S.TouchHere onClick={ModalOpenOnClick} THWidth="30px" THHeight="50px" marginLeft="2.5rem" marginTop="35.5vh" />
      <S.TouchHere onClick={ModalOpenOnClick} THWidth="30px" THHeight="40px" marginLeft="1rem" marginTop="69vh" />
      <S.TouchHere
        onClick={ModalOpenOnClick}
        THWidth="30px"
        THHeight="65px"
        marginLeft={isReponsive ? '13.5rem' : '12rem'}
        marginTop="76vh"
      />
      <S.TouchHere
        onClick={ModalOpenOnClick}
        THWidth="30px"
        THHeight="40px"
        marginLeft={isReponsive ? '13rem' : '11.5rem'}
        marginTop="48.5vh"
      />
      <S.TouchHere
        onClick={ModalOpenOnClick}
        THWidth="30px"
        THHeight="35px"
        marginLeft={isReponsive ? '21.3rem' : '19.4rem'}
        marginTop="49vh"
      />
      <S.TouchHere
        onClick={ModalOpenOnClick}
        THWidth="35px"
        THHeight="50px"
        marginLeft={isReponsive ? '17rem' : '15.5rem'}
        marginTop="19vh"
      />
    </S.MissionScreenContainer>
  );
};