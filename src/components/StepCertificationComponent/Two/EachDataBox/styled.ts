import styled from '@emotion/styled';

export const DataBox = styled.div<{ backgroundImgUrl: string }>`
  min-width: 22vh;
  height: 105px;

  border-radius: 10px;

  margin: 0 auto 20px auto;

  background-size: cover;
  background-image: url(${(props) => props.backgroundImgUrl});
  background-color: #000;
`;

export const backgroundCoverColor = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const DataText = styled.span<{ textColor: string }>`
  font-size: 12px;
  font-weight: 500;
  color: ${(props) => props.textColor};

  margin: auto;
`;
