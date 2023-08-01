import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './styled';

import datas from '@src/constants/stepOne';
import stepTwoData from '@src/constants/stepTwo';
import { GobackIcon } from '@src/components';
import { EachDataBox, StepTitleComponent, StepTitlePoint } from '@src/components/StepCertification';

export const StepCertificationPage: React.FC = () => {
  const [content, setContent] = useState<string>('');
  const [donotState, setDoNotState] = useState<string>('');
  const [otherTextureTitleState, setOtherTextureTitleState] = useState<string>('');
  const [otherTextureState, setOtherTextureState] = useState<string>('');
  const [notTextureTitleState, setNotTextureTitleState] = useState<string>('');
  const [notTextureState, setNotTextureState] = useState<string>('');
  const [dowayState, setDowayState] = useState<string>('');
  const [dowayTipState, setDowayTipState] = useState<string>('');
  const handleClickButton = (
    e,
    donot,
    otherTextureTitle,
    otherTexture,
    notTextureTitle,
    notTexture,
    doway,
    dowayTip
  ) => {
    setContent(e);
    setDoNotState(donot);
    setOtherTextureTitleState(otherTextureTitle);
    setOtherTextureState(otherTexture);
    setNotTextureTitleState(notTextureTitle);
    setNotTextureState(notTexture);
    setDowayState(doway);
    setDowayTipState(dowayTip);
  };

  const location = useLocation();
  const id = location.pathname.split('/')[3];
  console.log(id);

  useEffect(() => {
    localStorage.setItem('stepLevel', '1');
  }, []);

  const navigate = useNavigate();
  return (
    <S.StepCertification>
      <S.StepCertificationScreen>
        <S.GoBackContainer>
          <GobackIcon MoveWhere={-1} NavigateFunc={navigate} />
          <S.StepCertificationTitle>단계별 인증</S.StepCertificationTitle>
        </S.GoBackContainer>
        <S.StepPoint>
          <StepTitlePoint StepNumber={id ? 2 : 1} />
          <StepTitleComponent title={id ? '세부품목' : '품목 선택'} />
        </S.StepPoint>
        {id ? (
          <S.EachDataBoxContainer>
            {stepTwoData.paper.map((data, i) => {
              return <EachDataBox key={i} dataImgUrl={data.imgAddress} dataName={data.name} dataTextColor="#fff" />;
            })}
          </S.EachDataBoxContainer>
        ) : (
          <>
            <S.ContentList>
              {datas.map((data) => {
                return (
                  <S.ContentButton
                    onClick={() =>
                      handleClickButton(
                        data.text,
                        data.donotItem,
                        data.otherTextureTitle,
                        data.otherTexture,
                        data.notTextureTitle,
                        data.notTexture,
                        data.doway,
                        data.dowayTip
                      )
                    }
                    style={
                      content === data.text
                        ? { backgroundColor: data.backgroundColor, color: data.textColor }
                        : { color: '#808184' }
                    }
                    name={data.name}
                    key={data.id}
                  >
                    <S.ContentText>{data.text}</S.ContentText>
                  </S.ContentButton>
                );
              })}
            </S.ContentList>
            {content ? (
              <>
                <S.DescriptionContainer>
                  <S.exclamationMark
                    src={
                      'https://w7.pngwing.com/pngs/979/887/png-transparent-exclamatory-point-exclamation-mark-symbol-computer-icons-circle-warning-sign-exclamation-mark-miscellaneous-check-mark-smile.png'
                    }
                  />
                  <S.DescriptionDataContainer>
                    <S.doNotItem>{donotState}</S.doNotItem>
                    <S.otherTextureTitle>{otherTextureTitleState}</S.otherTextureTitle>
                    <S.otherTexture>{otherTextureState}</S.otherTexture>
                    <S.notTextureTitle>{notTextureTitleState}</S.notTextureTitle>
                    <S.notTexture>{notTextureState}</S.notTexture>
                  </S.DescriptionDataContainer>
                </S.DescriptionContainer>
                <S.DescriptionContainer>
                  <S.exclamationMark
                    src={
                      'https://w7.pngwing.com/pngs/979/887/png-transparent-exclamatory-point-exclamation-mark-symbol-computer-icons-circle-warning-sign-exclamation-mark-miscellaneous-check-mark-smile.png'
                    }
                  />
                  <S.DescriptionDataContainer>
                    <S.doNotItem>{dowayState}</S.doNotItem>
                    <S.dowayTip>{dowayTipState}</S.dowayTip>
                  </S.DescriptionDataContainer>
                </S.DescriptionContainer>
              </>
            ) : (
              <></>
            )}
          </>
        )}
      </S.StepCertificationScreen>
    </S.StepCertification>
  );
};
