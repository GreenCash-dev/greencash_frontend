import styled from '@emotion/styled';

export const Title = styled.div<{ Center: boolean }>`
  color: black;
  text-align: ${(props) => (props.Center ? 'center' : 'none')};
  font-size: 3rem;
  font-weight: bold;
`;
