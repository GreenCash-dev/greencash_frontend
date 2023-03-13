import { CaptureOptionsBox, GobackIcon } from '@src/components';
import axios from 'axios';
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Webcam from 'react-webcam';
import * as S from './styled';

const videoConstraints = {
  facingMode: 'environment',
};

export const OnceCertCapturePage: React.FC = () => {
  const [imgSrc, setImgSrc] = useState<string>('');
  const [send, setSend] = useState<boolean>(false);
  const [captureCount, setCaptureCount] = useState<number>(0);
  const cameraRef = useRef<Webcam>(null);
  const navigate = useNavigate();
  const capture = React.useCallback(() => {
    const imageSrc = cameraRef.current?.getScreenshot();
    if (imageSrc) {
      sendData(imageSrc);
      setImgSrc(imageSrc);
    }
  }, [cameraRef]);
  const sendData = (c: any) => {
    console.log(c);
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
    setCaptureCount(captureCount + 1);
  };

  const ChooseImageOnClick = () => {
    console.log('Choose image');
  };
  return (
    <S.OnceCertScreen>
      <S.GoBackContainer>
        <GobackIcon MoveWhere={-1} NavigateFunc={navigate} />
      </S.GoBackContainer>
      <S.CameraScreen>
        <Webcam
          style={{ opacity: 0.2, width: '100%', height: '100%' }}
          audio={false}
          ref={cameraRef}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
        />
      </S.CameraScreen>
      <S.PictureCount>{captureCount}/5</S.PictureCount>
      <S.CameraOptions>
        <CaptureOptionsBox
          OptionIsNext={ChooseImageOnClick}
          OptionsBoxImgSrc="https://cdn-icons-png.flaticon.com/128/1160/1160358.png"
          OptionBoxDesc="사진 선택"
        />
        <S.CaptureButton>
          <S.BlackCircle>
            <S.WhiteCenterCircle />
          </S.BlackCircle>
        </S.CaptureButton>
        <CaptureOptionsBox
          OptionIsNext={NextCaptureOnClick}
          OptionsBoxImgSrc="https://cdn-icons-png.flaticon.com/128/109/109617.png"
          OptionBoxDesc="다음"
        />
      </S.CameraOptions>
    </S.OnceCertScreen>
  );
};
