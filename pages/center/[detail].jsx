import centerInfo from '@/constant/center-info';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import SubTitle from '@/components/sub-title';
import styled from 'styled-components';
import Font from '@/components/font';
import Pre from '@/components/pre';
import ImageComponent from '@/components/image-component';
import CenterImages from '@/components/slick/center-images';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import TrainerImages from '@/components/slick/trainer-image';

const CenterDetail = () => {
  const router = useRouter();
  const [centerDetailInfo, setCenterDetailInfo] = useState();

  useEffect(() => {
    const filtered = centerInfo.filter(
      x => x.id === Number(router.query.detail),
    );

    setCenterDetailInfo(filtered[0]);
  }, []);

  return (
    <Frame>
      <SubTitle content={centerDetailInfo?.centerName} />

      <CustomPre>{centerDetailInfo?.description}</CustomPre>

      <div className="inner-frame">
        <div className="center-images-wrapper">
          <CenterImages images={centerDetailInfo?.images} />
        </div>

        <InfoFrame>
          <Font
            color="#000"
            $fontSize="2.5rem"
            $fontWeight={700}
            $whiteSpace="pre-wrap"
            $textAlign="center"
            $margin="0 0 1rem 0"
          >
            운영 안내/문의
          </Font>

          <CenterInfoWrapper>
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

            <ContactWrapper>
              <a href={centerDetailInfo?.instagramUrl} target="_blank">
                <ImageComponent
                  width={7}
                  height={7}
                  $cursor="pointer"
                  $src="/footer-instagram.svg"
                  $alt="footer-instagram"
                  $borderRadius="10px"
                />
              </a>

              <a href={centerDetailInfo?.kakaoTalkUrl} target="_blank">
                <ImageComponent
                  width={6}
                  height={6}
                  $cursor="pointer"
                  $src="/footer-kakaotalk.svg"
                  $alt="footer-kakaotalk"
                  $borderRadius="10px"
                />
              </a>

              <a href={centerDetailInfo?.naverPlaceUrl} target="_blank">
                <ImageComponent
                  width={5}
                  height={5}
                  $cursor="pointer"
                  $src="/footer-naver.svg"
                  $alt="footer-naver"
                  $borderRadius="10px"
                  $margin="0 0 0 1rem"
                />
              </a>
            </ContactWrapper>
          </CenterInfoWrapper>

          <FacilityFrame>
            <div className="wrapper">
              <Font
                color="#000"
                $fontSize="2.5rem"
                $fontWeight={700}
                $whiteSpace="pre-wrap"
                $margin="2rem 0 2rem 0"
              >
                편의시설
              </Font>

              <div className="facility-wrapper">
                <FacilityInnerWrapper>
                  <ImageComponent
                    width={3.5}
                    height={3.5}
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
                </FacilityInnerWrapper>

                <FacilityInnerWrapper>
                  <ImageComponent
                    width={3.5}
                    height={3.5}
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
                </FacilityInnerWrapper>

                <FacilityInnerWrapper>
                  <ImageComponent
                    width={3.5}
                    height={3.5}
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
                </FacilityInnerWrapper>

                <FacilityInnerWrapper>
                  <ImageComponent
                    width={3.5}
                    height={3.5}
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
                </FacilityInnerWrapper>

                <FacilityInnerWrapper>
                  <ImageComponent
                    width={3.5}
                    height={3.5}
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
                </FacilityInnerWrapper>
              </div>
            </div>
          </FacilityFrame>
        </InfoFrame>
      </div>

      <SubTitle content="퍼스널 트레이너" $margin="20rem 0 3rem 0" />

      <TrainerImagesFrame>
        <TrainerImages images={centerDetailInfo?.images} />
      </TrainerImagesFrame>

      {/* <div>카카오맵</div> */}

      <SubTitle
        content={`${centerDetailInfo?.centerName} 갤러리`}
        $margin="15rem 0 3rem 0"
      />
    </Frame>
  );
};

export default CenterDetail;

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .inner-frame {
    display: flex;
    justify-content: center;
    gap: 2rem;

    @media screen and (max-width: 500px) {
      flex-direction: column;
    }
  }

  .center-images-wrapper {
    width: 50%;

    @media screen and (max-width: 500px) {
      width: 100%;
      margin: 6rem auto 11rem 0;
    }
  }

  .ril-prev-button.ril__navButtons {
    display: none !important;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin: ${props => (props.$margin ? props.$margin : '')};
`;

const InfoFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

const CenterInfoWrapper = styled.div`
  width: 100%;
  border-radius: 10px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  background-color: #000;

  @media screen and (max-width: 500px) {
    margin-top: 2rem;
  }
`;

const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  gap: 0.5rem;
  margin-top: 2rem;
`;

const FacilityFrame = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;

  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 500px) {
      width: 90%;
      margin-top: 4rem;
      margin: 4rem auto 0rem auto;
    }
  }

  .facility-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }
`;

const FacilityInnerWrapper = styled.div`
  width: 10rem;
  padding: 1.5rem;
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

  @media screen and (max-width: 500px) {
    margin: 2rem 0 0 0;
  }
`;

const TrainerImagesFrame = styled.div`
  width: 100%;
`;
