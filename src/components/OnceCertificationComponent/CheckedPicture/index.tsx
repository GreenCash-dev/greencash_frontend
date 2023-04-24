import React from 'react';
import styled from '@emotion/styled';

interface CheckedQProps {
  NoneChecked: boolean;
}

export const CheckedPicture: React.FC<CheckedQProps> = ({ NoneChecked }) =>
  NoneChecked ? <NoneChekcedIcon /> : <CheckedIcon src={'https://cdn-icons-png.flaticon.com/128/5709/5709772.png'} />;

export const CheckedIcon = styled.img`
  width: 17px;
  height: 17px;

  margin: 0 5px 0 5px;
`;

export const NoneChekcedIcon = styled.div`
  width: 13px;
  height: 13px;

  margin: 0 5px 0 5px;
  border: 1.5px solid #000000;
  border-radius: 20px;
`;
