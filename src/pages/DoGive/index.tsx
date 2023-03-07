import { DoGiveDesc, DoGiveInput, GobackIcon } from '@src/components';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './styled';

export const DoGivePage: React.FC = () => {
  const [haveCash, setHaveCash] = useState(0); //보유중인 캐시
  const [doingGive, setDoingGive] = useState(0); //사람들이 기부중인 캐시
  const navigate = useNavigate();
  return (
    <S.DoGivePageContainer>
      <S.GoBackSection>
        <GobackIcon />
      </S.GoBackSection>
      <S.DoGiveDescSection>
        <DoGiveDesc />
      </S.DoGiveDescSection>
      <S.DoGiveCashInputSection>
        <DoGiveInput />
      </S.DoGiveCashInputSection>
      <S.DoGiveCashInfoSection></S.DoGiveCashInfoSection>
      <S.DoGiveButtonSection></S.DoGiveButtonSection>
    </S.DoGivePageContainer>
  );
};
