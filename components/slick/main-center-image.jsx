import React, { useState } from 'react';
import centerInfo from '@/constant/center-info';
import Slider from 'react-slick';
import ImageComponent from '@/components/image-component';
import Font from '@/components/font';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const MainCenterImage = () => {
  const router = useRouter();
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = () => {
    setIsDragging(false);
  };

  const handleMouseMove = () => {
    setIsDragging(true);
  };

  const handleMouseUp = x => {
    if (!isDragging) {
      router.push(`/center/${x.id}`);
    }
  };

  const CustomNextArrow = props => {
    const { onClick } = props;
    return (
      <ArrowWrapper
        className="right-arrow"
        onClick={e => {
          e.stopPropagation();
          onClick && onClick(e);
        }}
      >
        <ImageComponent
          width={2}
          height={2}
          $src="/rightarrow.svg"
          $alt="Next"
        />
      </ArrowWrapper>
    );
  };

  const CustomPrevArrow = props => {
    const { onClick } = props;
    return (
      <ArrowWrapper
        className="left-arrow"
        onClick={e => {
          e.stopPropagation();
          onClick && onClick(e);
        }}
      >
        <ImageComponent
          width={2}
          height={2}
          $src="/leftarrow.svg"
          $alt="Previous"
        />
      </ArrowWrapper>
    );
  };

  const settings = {
    dots: false,
    infinite: false,
    autoplay: true,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 9,
          slidesToScroll: 9,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
    ],
  };

  return (
    <div>
      <CustomSlider {...settings}>
        {centerInfo.map(x => (
          <div
            key={x.id}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={() => handleMouseUp(x)}
          >
            <ImageComponent
              width={10}
              height={10}
              $src={x.thumbnailImage}
              $alt={`slide-${x.id}`}
              $borderRadius="10px"
              $cursor="pointer"
            />

            <Font $fontSize="1.4rem" $fontWeight={700}>
              {x.centerName}
            </Font>
          </div>
        ))}
      </CustomSlider>
    </div>
  );
};

export default MainCenterImage;

const CustomSlider = styled(Slider)`
  width: 100%;

  .slick-slide {
    display: flex;
    justify-content: center;
    padding-bottom: 10px;
  }

  .slick-slide > div > div {
    display: flex !important;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

const ArrowWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  position: absolute;
  top: 40%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 2;

  &.left-arrow {
    left: -3rem;

    @media screen and (max-width: 500px) {
      left: -2rem;
    }
  }

  &.right-arrow {
    right: -3rem;

    @media screen and (max-width: 500px) {
      right: -2rem;
    }
  }

  img {
    width: 2rem;
    height: 2rem;
  }
`;
