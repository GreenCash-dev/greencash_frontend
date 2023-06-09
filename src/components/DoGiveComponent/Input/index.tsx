import React, { SetStateAction } from 'react';

import * as S from './styled';

interface DoGiveCashProps {
  setGiveCash: React.Dispatch<SetStateAction<number>>;
}

export const DoGiveInput: React.FC<DoGiveCashProps> = ({ setGiveCash }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    setGiveCash(value);
  };
  return (
    <S.DoGiveInputElement
      pattern="^[0-9]*"
      inputMode="numeric"
      type="number"
      onChange={handleChange}
      placeholder="캐시를 입력하세요"
    />
  );
};
