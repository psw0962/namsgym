import centerInfo from '@/constant/center-info';
import SubTitle from '@/components/sub-title';
import styled from 'styled-components';
import Font from '@/components/font';
import Pre from '@/components/pre';
import ImageComponent from '@/components/image-component';
import CenterImages from '@/components/slick/center-images';
import TrainerImages from '@/components/slick/trainer-image';
import { Map } from 'react-kakao-maps-sdk';
import CenterGallery from '@/components/center-gallery';
import { useInView } from 'react-intersection-observer';
import CustomMapMarker from '@/components/custom-map-maker';
import ReSetttingMapBoundsSingle from '@/components/resetting-map-bounds-single';
import 'animate.css';

const CenterDetail = ({ centerDetailInfo }) => {
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.01,
  });

  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.01,
  });

  return (
    <Frame>
      <div className="animate__animated animate__fadeInLeft">
        <SubTitle content={centerDetailInfo?.centerName} />
      </div>

      <div className="animate__animated animate__fadeInLeft">
        <CustomPre>{centerDetailInfo?.description}</CustomPre>
      </div>

      <div className="animate__animated animate__fadeIn">
        <CenterImages images={centerDetailInfo?.facility} />
      </div>

      <CenterInfoWrapper
        ref={ref2}
        className={`animate__animated ${inView2 ? 'animate__fadeIn' : ''}`}
      >
        <Font
          color="#fff"
          $fontSize="2.5rem"
          $fontWeight={700}
          $whiteSpace="pre-wrap"
          $textAlign="center"
          $margin="0 0 3.5rem 0"
        >
          운영 안내/문의
        </Font>

        <div style={{ margin: '0 auto' }}>
          <IconWrapper>
            <div>
              <ImageComponent
                width={2}
                height={2}
                $src="/phone.svg"
                $alt="phone"
              />
            </div>

            <Font
              $fontSize="1.6rem"
              $fontWeight="400"
              color="#fff"
              $textDecoration="underline"
            >
              <a href={`tel:${centerDetailInfo?.tel}`}>
                {centerDetailInfo?.tel}
              </a>
            </Font>
          </IconWrapper>

          <IconWrapper $margin="1.2rem 0 0 0">
            <ImageComponent
              width={2}
              height={2}
              $src="/dumbbell.svg"
              $alt="dumbbell"
            />

            <Pre
              $fontSize="1.6rem"
              $fontWeight="400"
              color="#fff"
              $lineHeight={1.4}
              $whiteSpace="pre-wrap"
            >
              {centerDetailInfo?.address}
            </Pre>
          </IconWrapper>

          <IconWrapper $margin="1.2rem 0 0 0">
            <ImageComponent
              width={2}
              height={2}
              $src="/clock.svg"
              $alt="clock"
            />

            <Pre
              $fontSize="1.6rem"
              $fontWeight="400"
              color="#fff"
              $lineHeight={1.4}
              $whiteSpace="pre-wrap"
            >
              {centerDetailInfo?.operatingTime}
            </Pre>
          </IconWrapper>

          <IconWrapper $margin="1.2rem 0 0 0">
            <ImageComponent width={2} height={2} $src="/car.svg" $alt="car" />

            <Font
              $fontSize="1.6rem"
              $fontWeight="400"
              color="#fff"
              $lineHeight={1.4}
              $whiteSpace="pre-wrap"
            >
              {centerDetailInfo?.parking}
            </Font>
          </IconWrapper>
        </div>

        <ContactWrapper>
          <a
            href={centerDetailInfo?.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImageComponent
              width={5.5}
              height={5.5}
              $cursor="pointer"
              $src="/instagram.svg"
              $alt="instagram"
              $borderRadius="10px"
            />
          </a>

          <a
            href={centerDetailInfo?.kakaoTalkUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImageComponent
              width={5}
              height={5}
              $cursor="pointer"
              $src="/kakaotalk.svg"
              $alt="kakaotalk"
              $borderRadius="10px"
              $margin="0 0 0 1rem"
            />
          </a>

          <a
            href={centerDetailInfo?.naverPlaceUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImageComponent
              width={5}
              height={5}
              $cursor="pointer"
              $src="/naver.svg"
              $alt="naver"
              $borderRadius="10px"
              $margin="0 0 0 1rem"
            />
          </a>
        </ContactWrapper>

        <DivLine />

        <FacilityFrame>
          <Font
            color="#fff"
            $fontSize="2.5rem"
            $fontWeight={700}
            $whiteSpace="pre-wrap"
            $margin="0 0 3rem 0"
          >
            편의시설
          </Font>

          <div className="wrapper">
            <FacilityWrapper>
              <ImageComponent
                width={3}
                height={3}
                $src="/shower.svg"
                $alt="shower"
              />

              <Font
                color="#fff"
                $fontSize="1.4rem"
                $fontWeight={700}
                $whiteSpace="pre-wrap"
              >
                샤워실
              </Font>
            </FacilityWrapper>

            <FacilityWrapper>
              <ImageComponent
                width={3}
                height={3}
                $src="/inventory.svg"
                $alt="inventory"
              />

              <Font
                color="#fff"
                $fontSize="1.4rem"
                $fontWeight={700}
                $whiteSpace="pre-wrap"
              >
                락커시설
              </Font>
            </FacilityWrapper>

            <FacilityWrapper>
              <ImageComponent
                width={3}
                height={3}
                $src="/clothes.svg"
                $alt="clothes"
              />

              <Font
                color="#fff"
                $fontSize="1.4rem"
                $fontWeight={700}
                $whiteSpace="pre-wrap"
              >
                운동복/수건
              </Font>
            </FacilityWrapper>

            <FacilityWrapper>
              <ImageComponent
                width={3}
                height={3}
                $src="/drink.svg"
                $alt="drink"
              />

              <Font
                color="#fff"
                $fontSize="1.4rem"
                $fontWeight={700}
                $whiteSpace="pre-wrap"
              >
                음료 자판기
              </Font>
            </FacilityWrapper>

            <FacilityWrapper>
              <ImageComponent
                width={3}
                height={3}
                $src="/wifi.svg"
                $alt="wifi"
              />

              <Font
                color="#fff"
                $fontSize="1.4rem"
                $fontWeight={700}
                $whiteSpace="pre-wrap"
              >
                와이파이
              </Font>
            </FacilityWrapper>
          </div>
        </FacilityFrame>
      </CenterInfoWrapper>

      <MapWrapper>
        <Map
          id="map"
          center={{
            lat: 37.34000448213145,
            lng: 126.77825131268006,
          }}
          style={{
            width: '100%',
            height: '50rem',
          }}
          level={4}
        >
          {/* 맵 마커 */}
          <CustomMapMarker
            centerData={centerDetailInfo}
            infoWindowIsOpen={true}
          />

          {/* 리바운스 */}
          <ReSetttingMapBoundsSingle points={centerDetailInfo} />
        </Map>
      </MapWrapper>

      <SubTitle content="퍼스널 트레이너" $margin="15rem 0 3rem 0" />

      {centerDetailInfo && (
        <TrainerImagesFrame>
          <TrainerImages images={centerDetailInfo?.trainer} />
        </TrainerImagesFrame>
      )}

      {centerDetailInfo?.gallrey.length > 0 && (
        <>
          <SubTitle
            content={`${centerDetailInfo?.centerName} 갤러리`}
            $margin="15rem 0 3rem 0"
          />

          <div
            ref={ref1}
            className={`animate__animated ${inView1 ? 'animate__fadeIn' : ''}`}
          >
            <CenterGallery images={centerDetailInfo?.gallrey} />
          </div>
        </>
      )}

      <MarginComp />
    </Frame>
  );
};

export async function getServerSideProps(context) {
  const { detail } = context.query;
  const filtered = centerInfo.filter(x => x.id === Number(detail));
  const centerDetailInfo = filtered[0] || null;

  return {
    props: {
      centerDetailInfo,
    },
  };
}

export default CenterDetail;

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const CenterInfoWrapper = styled.div`
  width: 100%;
  border-radius: 10px;
  padding: 3.5rem;
  margin-top: 15rem;
  display: flex;
  flex-direction: column;
  background-color: #000;

  @media screen and (max-width: 500px) {
    margin-top: 10rem;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin: ${props => (props.$margin ? props.$margin : '')};
`;

const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  margin-top: 2rem;
`;

const FacilityFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .wrapper {
    display: flex;

    @media screen and (max-width: 500px) {
      flex-wrap: wrap;
      justify-content: center;
      gap: 3rem;
    }
  }
`;

const FacilityWrapper = styled.div`
  width: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background-color: #000;
  border-radius: 10px;
`;

const CustomPre = styled(Pre)`
  color: #4c4f54;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 1.4;
  white-space: pre-wrap;
  margin: 0 0 4rem 0;
`;

const TrainerImagesFrame = styled.div`
  width: 100%;
`;

const MarginComp = styled.div`
  margin-top: 15rem;
`;

const DivLine = styled.div`
  border: 1px solid #fff;
  margin: 1rem 0 2rem 0;
`;

const MapWrapper = styled.div`
  margin-top: 4rem;

  #map {
    border-radius: 10px;
  }
`;
