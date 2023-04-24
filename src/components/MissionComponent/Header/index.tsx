import React from 'react';
import * as S from './styled';

interface MissionHeaderProps {
  MissionText: string;
}

export const MissionHeader: React.FC<MissionHeaderProps> = ({ MissionText }) => {
  return (
    <S.Header>
      <S.HeaderText>{MissionText}</S.HeaderText>
    </S.Header>
  );
};
