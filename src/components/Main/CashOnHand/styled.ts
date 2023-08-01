import styled from '@emotion/styled';

export const CashOnHandBox = styled.div`
  width: 77px;
  height: 23px;

  border: 2px solid rgba(185, 222, 42, 1);
  border-radius: 20px;

  display: flex;
  background-color: rgba(252, 253, 253, 1);
  cursor: pointer;
`;
export const CashOnHandIcon = styled.div`
  width: 12px;
  height: 12px;

  border: 2px solid rgba(185, 222, 42, 1);
  border-radius: 10px;

  margin: auto;
  margin-left: 10px;
  margin-right: 0;
`;
export const CashOnHandIconText = styled.div<{ marginTop: string; marginRight: string }>`
  font-size: 13px;
  text-align: center;
  color: rgba(185, 222, 42, 1);

  margin-top: ${(props) => props.marginTop};
  margin-right: ${(props) => props.marginRight};
`;

export const CashOnHandValue = styled.div`
  font-size: 15px;
  font-weight: bold;
  color: rgba(185, 222, 42, 1);

  margin: auto auto auto 4px;
`;
