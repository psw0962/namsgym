import CustomMapMarker from '@/components/custom-map-maker';
import Font from '@/components/font';
import ImageComponent from '@/components/image-component';
import Pre from '@/components/pre';
import ReSetttingMapBounds from '@/components/resetting-map-bounds';
import SubTitle from '@/components/sub-title';
import centerInfo from '@/constant/center-info';
import shuffleArray from '@/functions/shuffleArray';
import useDrag from '@/hooks/useDrag';
import 'animate.css';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import { Map } from 'react-kakao-maps-sdk';
import styled, { keyframes } from 'styled-components';
import { useState } from 'react';
import Line from '@/components/line';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const MACHINELOGO = [
  { id: 1, url: '/images/machine-logo/1.jpg' },
  { id: 2, url: '/images/machine-logo/2.jpg' },
  { id: 3, url: '/images/machine-logo/3.jpg' },
  { id: 4, url: '/images/machine-logo/4.jpg' },
  { id: 5, url: '/images/machine-logo/5.jpg' },
  { id: 6, url: '/images/machine-logo/6.jpg' },
];

const Center = () => {
  const router = useRouter();
  const isDragging = useDrag();

  const [checkedItems, setCheckedItems] = useState(centerInfo);

  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      // 첫 번째 배열을 복제하여 두 번 반복하게
      const clonedElements = Array.from(carousel.children).map(child => {
        return child.cloneNode(true);
      });

      // 복제한 요소들을 carousel에 추가
      clonedElements.forEach(element => {
        carousel.appendChild(element);
      });
    }
  }, []);

  useEffect(() => {
    const shuffledItems = shuffleArray([...checkedItems]);
    setCheckedItems(shuffledItems);
  }, []);

  const handleCheckboxChange = (event, center) => {
    const { checked } = event.target;
    setCheckedItems(prev => {
      if (checked) {
        return [...prev, center];
      } else {
        return prev.filter(item => item.id !== center.id);
      }
    });
  };

  const handleSelectAll = event => {
    const { checked } = event.target;
    if (checked) {
      const shuffledItems = shuffleArray([...centerInfo]);
      setCheckedItems(shuffledItems);
    } else {
      setCheckedItems([]);
    }
  };

  return (
    <Frame>
      <SubTitle content="지점 안내" />

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
        {checkedItems.map(x => {
          return <CustomMapMarker key={x.id} centerData={x} />;
        })}

        {/* 지도 리바운스 */}
        <ReSetttingMapBounds points={checkedItems} />
      </Map>

      <CarouselContainer>
        <ScrollImageWrapper ref={carouselRef}>
          {MACHINELOGO.map(item => (
            <ScorllImage
              key={item.id}
              src={item.url}
              alt={`image-${item.id}`}
            />
          ))}
        </ScrollImageWrapper>
      </CarouselContainer>

      <FindCenterFrame>
        <CountTagWrapper>
          <Font $fontSize="2.6rem" $fontWeight="700">
            지점 찾기
          </Font>

          <CountTag>
            <Font $fontSize="1.2rem" $fontWeight="700">
              {centerInfo.length}
            </Font>
          </CountTag>
        </CountTagWrapper>

        <CheckBoxWrapper>
          <CheckboxItem>
            <HiddenCheckbox
              type="checkbox"
              id="전체"
              name="전체"
              checked={checkedItems.length === centerInfo.length}
              onChange={handleSelectAll}
            />
            <CustomCheckboxLabel
              htmlFor="전체"
              $isChecked={checkedItems.length === centerInfo.length}
            >
              <CheckboxIndicator
                $isChecked={checkedItems.length === centerInfo.length}
              >
                <CheckIcon
                  $isChecked={checkedItems.length === centerInfo.length}
                >
                  ✓
                </CheckIcon>
              </CheckboxIndicator>
              <LabelText>전체</LabelText>
            </CustomCheckboxLabel>
          </CheckboxItem>

          {centerInfo.map(x => {
            const isChecked = checkedItems?.some(item => item?.id === x?.id);
            return (
              <CheckboxItem key={x.id}>
                <HiddenCheckbox
                  type="checkbox"
                  id={`${x.centerName}`}
                  name={`${x.centerName}`}
                  checked={isChecked}
                  onChange={event => handleCheckboxChange(event, x)}
                />
                <CustomCheckboxLabel
                  htmlFor={`${x.centerName}`}
                  $isChecked={isChecked}
                >
                  <CheckboxIndicator $isChecked={isChecked}>
                    <CheckIcon $isChecked={isChecked}>✓</CheckIcon>
                  </CheckboxIndicator>
                  <LabelText>{x.centerName}</LabelText>
                </CustomCheckboxLabel>
              </CheckboxItem>
            );
          })}
        </CheckBoxWrapper>
      </FindCenterFrame>

      <Line $margin="3rem 0" border="1px solid #515151" />

      {checkedItems.length === 0 && (
        <NoSelected className="animate__animated animate__fadeIn">
          <Font $fontSize="3rem" $fontWeight="700">
            선택한 지점이 없습니다.
          </Font>
        </NoSelected>
      )}
      {checkedItems?.length > 0 && (
        <CardFrame>
          <TransitionGroup component={null}>
            {checkedItems?.map(x => (
              <CSSTransition
                key={x?.id}
                timeout={500}
                classNames="card"
                appear={true}
              >
                <CardWrapper
                  onClick={() => {
                    if (!isDragging) {
                      router.push(`/center/${x.id}`);
                    }
                  }}
                >
                  <ImageComponent
                    className="scale-img"
                    width={'100%'}
                    height={30}
                    $borderRadius="10px 10px 0 0"
                    $cursor="pointer"
                    $src={`/images/center/center${x.id}/facility/1.jpg`}
                    $alt="center1"
                  />

                  <CardInfo className="center-info">
                    <Font $fontSize="2rem" $fontWeight="700" color="#fff">
                      {x?.centerName}
                    </Font>

                    <Font
                      $fontSize="1.6rem"
                      $fontWeight="400"
                      color="#fff"
                      $lineHeight={1.4}
                    >
                      {x?.address}
                    </Font>

                    <IconWrapper $margin="1.5rem 0 0 0">
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
                        $margin="0.5rem 0 0 0"
                      >
                        {x?.tel}
                      </Font>
                    </IconWrapper>

                    <IconWrapper $margin="0.1rem 0 0 0">
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
                        {x?.operatingTime}
                      </Pre>
                    </IconWrapper>

                    <IconWrapper $margin="0.1rem 0 0 0">
                      <ImageComponent
                        width={2}
                        height={2}
                        $src="/car.svg"
                        $alt="car"
                      />

                      <Font
                        $fontSize="1.6rem"
                        $fontWeight="400"
                        color="#fff"
                        $lineHeight={1.4}
                        $whiteSpace="pre-wrap"
                      >
                        {x?.parking}
                      </Font>
                    </IconWrapper>
                  </CardInfo>
                </CardWrapper>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </CardFrame>
      )}
    </Frame>
  );
};

export default Center;

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  #map {
    border-radius: 10px;
  }
`;

const FindCenterFrame = styled.div`
  margin-top: 10rem;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  align-items: center;
`;

const CardFrame = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  margin-bottom: 10rem;

  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }

  /* 카드 애니메이션 스타일 */
  .card-appear {
    opacity: 0;
    transform: translateY(30px) scale(0.9);
  }

  .card-appear-active {
    opacity: 1;
    transform: translateY(0) scale(1);
    transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .card-enter {
    opacity: 0;
    transform: translateY(30px) scale(0.9);
  }

  .card-enter-active {
    opacity: 1;
    transform: translateY(0) scale(1);
    transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .card-exit {
    opacity: 1;
    transform: translateY(0) scale(1);
  }

  .card-exit-active {
    opacity: 0;
    transform: translateY(-30px) scale(0.9);
    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;

  &.card-animate {
    animation: cardFadeIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) both;
  }

  @keyframes cardFadeIn {
    0% {
      opacity: 0;
      transform: translateY(30px) scale(0.95);
    }
    100% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  .scale-img {
    overflow: hidden;
  }

  &:hover .scale-img img {
    transform: scale(1.1);
    transition: transform 0.2s ease-in-out;
  }

  &:hover .center-info {
    background-color: #cbad63;
    transition: background-color 0.2s ease-in-out;
  }
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #101015;
  padding: 2.5rem;
  border-radius: 0 0 10px 10px;
  max-height: 33rem;
  height: 100%;
  cursor: pointer;
`;

const CountTagWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  position: relative;
`;

const CountTag = styled.div`
  position: absolute;
  right: -3rem;
  bottom: 0.5rem;
  width: fit-content;
  height: fit-content;
  display: flex;
  padding: 0.5rem;
  border-radius: 5px;
  background-color: #ceb063;
  color: #fff;
  font-size: 1.5rem;
`;

const CheckBoxWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  margin-top: 2rem;
  justify-content: center;

  @media screen and (max-width: 500px) {
    gap: 1rem;
  }
`;

const CheckboxItem = styled.div`
  display: flex;
  align-items: center;
`;

const HiddenCheckbox = styled.input`
  opacity: 0;
  position: absolute;
  pointer-events: none;
`;

const CustomCheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  cursor: pointer;
  padding: 1rem 1.6rem;
  border-radius: 25px;
  border: 2px solid ${props => (props.$isChecked ? '#ceb063' : '#d0d0d0')};
  background: #ffffff;
  color: #333333;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  user-select: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transform: translateY(0);

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
    border-color: #ceb063;
  }

  &:active {
    transform: translateY(0);
  }
`;

const CheckboxIndicator = styled.div`
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 50%;
  background: ${props => (props.$isChecked ? '#ceb063' : '#ffffff')};
  border: 2px solid ${props => (props.$isChecked ? '#ceb063' : '#d0d0d0')};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  box-shadow: ${props =>
    props.$isChecked
      ? '0 2px 8px rgba(206, 176, 99, 0.3)'
      : '0 1px 3px rgba(0, 0, 0, 0.1)'};
`;

const CheckIcon = styled.span`
  font-size: 1.4rem;
  font-weight: 900;
  color: #ffffff;
  opacity: ${props => (props.$isChecked ? 1 : 0)};
  transform: scale(${props => (props.$isChecked ? 1 : 0)});
  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
`;

const LabelText = styled.span`
  font-size: 1.6rem;
  font-weight: 500;
  transition: all 0.3s ease;
  color: #333333;

  @media screen and (max-width: 500px) {
    font-size: 1.4rem;
  }
`;

const NoSelected = styled.div`
  margin-top: 10rem;
  margin-bottom: 10rem;
  display: flex;
  justify-content: center;
`;

// 스크롤 애니매이션
const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const CarouselContainer = styled.div`
  margin-top: 10rem;
  width: 100%;
  overflow: hidden;
  position: relative;
`;

const ScrollImageWrapper = styled.div`
  display: flex;
  gap: 2rem;
  width: fit-content;
  animation: ${scroll} 20s linear infinite;
`;

const ScorllImage = styled.img`
  width: 20rem;
  height: auto;
  border-radius: 20px;

  @media screen and (max-width: 500px) {
    width: 10rem;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin: ${props => (props.$margin ? props.$margin : '')};
`;
