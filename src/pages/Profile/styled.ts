import styled from '@emotion/styled';

export const ProfileContainer = styled.section`
  width: 100%;
  height: 100vh;
  background-color: rgba(245, 245, 245, 1);
`;

export const ProfileFilter = styled.div<{ filterBoolean }>`
  filter: ${(props) => (props.filterBoolean ? 'none' : 'blur(4px)')};
`;
