import styled from '@emotion/styled';

export const InfoBox = styled.div`
  display: flex;

  width: 75%;
  height: 90px;

  border-radius: 10px;

  background-color: #fff;

  margin: 20px auto 0 auto;
`;

//이미지 태그로 바뀔 예정입니다.
export const InfoPicture = styled.div`
  width: 62px;
  height: 62px;

  margin: auto 0 auto 22px;
  border-radius: 50%;
  background-color: #a7e05e;
`;
export const ProfileInfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin: auto auto auto 22px;
`;
export const ProfileName = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #000;

  text-align: left;
`;

export const HaveCashContainer = styled.div`
  display: flex;

  margin-top: 7px;
`;
export const HaveCash = styled.strong`
  font-size: 13px;
  font-weight: 500;

  margin-left: 5px;
`;
export const CashOnHandIcon = styled.div`
  width: 12px;
  height: 12px;

  border: 2px solid rgba(185, 222, 42, 1);
  border-radius: 10px;

  margin: auto;
  margin-right: 0;
`;
export const CashOnHandIconText = styled.div<{ marginTop: string; marginRight: string }>`
  font-size: 13px;
  text-align: center;
  color: rgba(185, 222, 42, 1);

  margin-top: ${(props) => props.marginTop};
  margin-right: ${(props) => props.marginRight};
`;
