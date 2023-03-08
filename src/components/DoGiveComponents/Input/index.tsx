import React, { SetStateAction } from 'react';

import * as S from './styled';

interface DoGiveCashProps {
  setGiveCash: React.Dispatch<SetStateAction<string>>;
}

export const DoGiveInput: React.FC<DoGiveCashProps> = ({ setGiveCash }) => {
  return (
    <S.DoGiveInputElement
      pattern="^[0-9]*"
      inputMode="numeric"
      type="number"
      onChange={(event) => setGiveCash(event.target.value)}
      placeholder="캐시를 입력하세요"
    />
  );
};
