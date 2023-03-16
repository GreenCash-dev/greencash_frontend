import React from 'react';
import styled from '@emotion/styled';

interface PeriodProps {
  PeriodData: string;
}

export const CampaignPeriod: React.FC<PeriodProps> = ({ PeriodData }) => <PeriodText>{PeriodData}</PeriodText>;

export const PeriodText = styled.span`
  font-size: 15px;
  font-weight: 600;
  text-align: left;
`;
