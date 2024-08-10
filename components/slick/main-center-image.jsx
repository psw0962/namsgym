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

  function CustomNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: 'block',
          color: 'black',
          //   background: '#D6B86B',
        }}
        onClick={onClick}
      ></div>
    );
  }

  function CustomPrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: 'block',
          color: 'black',
          //   background: '#D6B86B',
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: false,
    infinite: false,
    autoplay: true,
    arrows: true,
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
      //   {
      //     breakpoint: 600,
      //     settings: {
      //       slidesToShow: 9,
      //       slidesToScroll: 9,
      //     },
      //   },
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
  }

  .slick-slide > div > div {
    display: flex !important;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;
