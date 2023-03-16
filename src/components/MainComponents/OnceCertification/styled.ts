import styled from '@emotion/styled';

export const OnceCertificationBox = styled.div`
  width: 100%;
  height: 160px;

  border-radius: 10px;
  background: linear-gradient(
    134deg,
    rgba(150, 222, 90, 1),
    rgba(196, 234, 99, 1),
    rgba(150, 222, 90, 1),
    rgba(196, 234, 99, 1)
  );
  background-size: 400% 400%;
  cursor: pointer;
  animation: gradient 15s ease infinite;
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export const OnceCertificationContainer = styled.div`
  display: flex;
`;

export const CameraIcon = styled.img`
  width: 25px;
  margin-left: 1rem;
  margin-top: 1.2rem;
`;

export const OnceCertificationText = styled.span`
  color: rgba(250, 250, 250, 1);
  font-size: 20px;
  font-weight: bold;

  margin-top: 1.2rem;
  margin-left: 0.8rem;
`;
