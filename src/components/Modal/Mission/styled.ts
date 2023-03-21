import styled from '@emotion/styled';

export const ModalWarp = styled.div`
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
`;

export const MissionModalBox = styled.div`
  width: 100%;
  height: 280px;

  line-height: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 15px 15px 0 0;
  background-color: #ffffff;

  margin: auto auto 0 auto;
  z-index: 100000;
`;
