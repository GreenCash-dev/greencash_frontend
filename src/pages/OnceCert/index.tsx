import { GobackIcon } from '@src/components';
import axios from 'axios';
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Webcam from 'react-webcam';

import * as S from './styled';

const videoConstraints = {
  width: 375,
  height: 600,
  facingMode: 'environment',
};

export const OnceCertCapturePage: React.FC = () => {
  const [imgSrc, setImgSrc] = useState<string>('');
  const [send, setSend] = useState<boolean>(false);
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

  return (
    <S.OnceCertScreen>
      <S.GoBackContainer>
        <GobackIcon MoveWhere={-1} NavigateFunc={navigate} />
      </S.GoBackContainer>
      <S.CameraScreen>as</S.CameraScreen>
      <S.CameraOptions>
        <S.CaptureButton>
          <S.BlackCircle>
            <S.WhiteCenterCircle />
          </S.BlackCircle>
        </S.CaptureButton>
      </S.CameraOptions>
    </S.OnceCertScreen>
  );
};
