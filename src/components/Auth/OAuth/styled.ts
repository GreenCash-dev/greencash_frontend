import styled from '@emotion/styled';

export const OAuthBox = styled.button`
  display: flex;

  width: 75%;
  height: 50px;

  border: none;
  border-radius: 10px;
  background-color: #fff;

  cursor: pointer;
  margin: 40px auto 0 auto;
  transition: transform 0.2s;
  :active {
    transform: scale(0.95);
  }
`;

//이미지 태그로 바뀔 예정입니다.
export const OAuthLogo = styled.img`
  width: 30px;
  height: 30px;

  margin: auto 10px auto auto;
  border-radius: 50%;
  background-color: #a7e05e;
`;

export const OAuthText = styled.span`
  margin: auto auto auto 10px;

  font-family: Pretendard;
  font-weight: 700;
  font-size: 14px;
`;
