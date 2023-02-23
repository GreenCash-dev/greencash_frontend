import styled from '@emotion/styled';

export const TopNavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 7rem;
  margin-bottom: 5rem;
`;
export const TopNavbarMenus = styled.div`
  margin: auto;
  display: flex;
`;
export const TopNavbar = styled.div`
  color: rgba(0, 0, 0, 1);
  font-size: 20px;
  font-weight: 500;
  margin: 0 5rem 0 5rem;
  text-align: center;
`;

export const CircleContainer = styled.div<{ widthNum: number }>`
  width: ${(props) =>
    props.widthNum === 1
      ? '62.5%'
      : '' || props.widthNum === 2
      ? '91.5%'
      : '' || props.widthNum === 3
      ? '129.5%'
      : ''}; //155
  display: flex;
  margin-bottom: 2rem;
`;

export const Circle = styled.div`
  width: 8px;
  height: 8px;
  margin: auto;
  border-radius: 10px;
  background-color: rgba(179, 219, 14, 1);
`;
