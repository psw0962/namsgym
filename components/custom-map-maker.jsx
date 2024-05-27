import React, { useState, useEffect } from 'react';
import { MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk';
import styled from 'styled-components';
import Font from './font';
import Button from './button';
import ImageComponent from './image-component';
import { useRouter } from 'next/router';
import { useKakaoMapLoaded } from '@/hooks/useKakaoMapLoaded';

const CustomMapMarker = ({ centerData, infoWindowIsOpen }) => {
  const router = useRouter();
  const kakaoMapLoaded = useKakaoMapLoaded();

  // 인포윈도우
  const [isOpen, setIsOpen] = useState(false);

  // 페이지 진입 시 인포윈도우 상태 설정
  useEffect(() => {
    if (kakaoMapLoaded && infoWindowIsOpen) {
      setIsOpen(true);
    }
  }, [kakaoMapLoaded, infoWindowIsOpen]);

  return (
    <Frame>
      {/* 마커 */}
      <MapMarker
        position={{
          lat: `${centerData?.lat}`,
          lng: `${centerData?.lng}`,
        }}
        clickable={true}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {/* 인포윈도우 */}
        {isOpen && (
          <CustomOverlayMap
            position={{
              lat: `${centerData?.lat}`,
              lng: `${centerData?.lng}`,
            }}
            clickable={true}
            yAnchor={1.13}
            zIndex={100}
          >
            <InfoWindow>
              <ImageComponent
                width={'100%'}
                height={15}
                $cursor="pointer"
                $zIndex={10}
                $borderRadius="10px"
                $src={centerData?.thumbnailImage}
                $alt={`centerImage${centerData?.id}`}
              />

              <Font $fontSize="2rem" $fontWeight={700} $margin="2rem 0 0 0">
                {centerData?.centerName}
              </Font>

              <Font
                $fontSize="1.8rem"
                $lineHeight={1.4}
                color="#868C92"
                $margin="1rem 0 0 0"
              >
                {centerData?.address}
                <br />
                {centerData?.tel}
              </Font>

              <ButtonWrapper>
                <Button
                  $fontSize="1.4rem"
                  $backgroundColor="#CBAD61"
                  color="#fff"
                  onClick={e => router.push(`/center/${centerData?.id}`)}
                >
                  자세히보기
                </Button>

                <Button
                  $fontSize="1.4rem"
                  $backgroundColor="#000"
                  color="#fff"
                  onClick={() => setIsOpen(false)}
                >
                  닫기
                </Button>
              </ButtonWrapper>
            </InfoWindow>
          </CustomOverlayMap>
        )}
      </MapMarker>
    </Frame>
  );
};

export default CustomMapMarker;

const Frame = styled.div``;

const InfoWindow = styled.div`
  white-space: pre-wrap;
  width: 30rem;
  height: 100%;
  padding: 2rem;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 20px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;
