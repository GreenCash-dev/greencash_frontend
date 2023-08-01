import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Webcam from 'react-webcam';
import * as S from './styled';
import { useRecoilState } from 'recoil';
import { certificationPictureState } from '@src/atom/CertificationPicture';
import { GobackIcon } from '@src/components';
import { CaptureOptionsBox } from '@src/components/OnceCertification';

const videoConstraints = {
  facingMode: 'environment',
};

export const CapturePage: React.FC = () => {
  const [imgSrc, setImgSrc] = useState<string>('');
  const [saveImg, setSaveImg] = useState({
    One: imgSrc,
    Two: imgSrc,
    Three: imgSrc,
    Four: imgSrc,
    Five: imgSrc,
  });
  const [send, setSend] = useState<boolean>(false);
  const [imgArray, setImgArray] = useState([saveImg.One, saveImg.Two, saveImg.Three, saveImg.Four, saveImg.Five]);
  const [pic, setPic] = useRecoilState(certificationPictureState);
  const [captured, setCaptured] = useState(false);
  const [captureCount, setCaptureCount] = useState<number>(1);

  const cameraRef = useRef<Webcam>(null);
  const navigate = useNavigate();
  const capture = React.useCallback(() => {
    const imageSrc = cameraRef.current?.getScreenshot();
    if (imageSrc) {
      sendData(imageSrc);
      setImgSrc(imageSrc);
    }
  }, [cameraRef]);
  // eslint-disable-next-line prefer-const
  let nj = 0;
  const sendData = (c: string) => {
    imgArray[nj] = c;
    nj++;
    setCaptured(imgArray[nj] === '' || imgArray[imgArray.length - 1] !== ' ');
    const headers = {
      accept: 'application/json',
    };

    const fd = new FormData();
    fd.append('image', c);

    axios
      .post('url', fd, { headers: headers })
      .then((res) => {
        console.log(res.data);
        setSend(true);
      })
      .catch((err) => console.log(err));
  };
  const NextCaptureOnClick = () => {
    setCaptured(false);
    if (captured) setCaptureCount(captureCount + 1);
  };
  const GoCertificationOnClick = () => {
    navigate('/certification');
    setPic((prev) => ({
      ...prev,
      pictureOne: imgArray[0],
      pictureTwo: imgArray[1],
      pictureThree: imgArray[2],
      pictureFour: imgArray[3],
      pictureFive: imgArray[4],
    }));
  };
  return (
    <S.OnceCertScreen>
      <S.GoBackContainer>
        <GobackIcon MoveWhere={-1} NavigateFunc={navigate} />
      </S.GoBackContainer>
      <S.CameraScreen>
        {captured ? (
          <S.CapturedImg src={imgSrc} />
        ) : (
          <Webcam
            style={{ width: '100%', height: '100%' }}
            audio={false}
            ref={cameraRef}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />
        )}
      </S.CameraScreen>
      <S.PictureCount>{captureCount}/5</S.PictureCount>
      <S.CameraOptions>
        <CaptureOptionsBox
          NowCertificationQ={captured || captureCount > 1}
          NoneReverseQ={false}
          OptionOnClick={GoCertificationOnClick}
          OptionsBoxImgSrc="https://cdn-icons-png.flaticon.com/128/109/109617.png"
          OptionBoxDesc="지금 인증"
        />
        <S.CaptureButton disabled={captured} onClick={capture}>
          <S.BlackCircle>
            <S.WhiteCenterCircle />
          </S.BlackCircle>
        </S.CaptureButton>
        <CaptureOptionsBox
          NowCertificationQ={captured || captureCount > 1}
          NoneReverseQ={true}
          OptionOnClick={captureCount === 5 ? GoCertificationOnClick : NextCaptureOnClick}
          OptionsBoxImgSrc="https://cdn-icons-png.flaticon.com/128/109/109617.png"
          OptionBoxDesc={captureCount === 5 ? '인증 확인' : '다음'}
        />
      </S.CameraOptions>
    </S.OnceCertScreen>
  );
};
