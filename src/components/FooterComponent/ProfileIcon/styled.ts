import styled from '@emotion/styled';

export const ProfileIcon = styled.img`
  width: 20px;
  height: 20px;
  margin: auto;
`;
export const ProfileText = styled.div<{ ProfileTextColor: string }>`
  color: ${(props) => (props.ProfileTextColor === 'profile' ? '#acd60a' : '#D9D9D9')};
  font-size: 13px;
  font-weight: bold;
  margin-top: 7px;
`;
