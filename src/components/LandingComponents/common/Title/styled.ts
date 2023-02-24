import styled from '@emotion/styled';

export const Title = styled.div<{ textAlign: string }>`
  color: black;
  text-align: ${(props) => props.textAlign};
  font-size: 3rem;
  font-weight: bold;
`;
