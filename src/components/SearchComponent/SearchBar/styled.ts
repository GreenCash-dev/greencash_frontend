import styled from '@emotion/styled';

export const SearchBarContainer = styled.header`
  width: 100%;
  height: 8vh;

  display: flex;
  background-color: #fff;

  box-shadow: 0 5px 10px -10px rgba(150, 150, 150, 1);
`;
export const SearchBarIcon = styled.img`
  width: 22px;
  height: 22px;

  margin: auto 0 auto 20px;
`;

export const SearchForm = styled.form`
  margin: auto 0 auto 20px;
`;

export const SearchBarInput = styled.input`
  width: 100%;
  height: 22px;

  border: none;
  outline: none;

  font-size: 16px;
  font-weight: bold;
  ::placeholder {
    color: rgba(200, 200, 200, 1);
  }
`;
