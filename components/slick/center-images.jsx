import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import ImageComponent from '../image-component';

function CustomPaging({ images }) {
  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <ImageComponent
            $src={images[i]}
            $alt={`slide-${i}`}
            $borderRadius="10px"
          />
        </a>
      );
    },
    draggable: true,
    arrows: false,
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <SliderContainer>
      <Slider {...settings}>
        {images?.map((image, index) => (
          <div key={index}>
            <ImageComponent
              width={'100%'}
              height={65}
              $src={image}
              $alt={`slide-${index}`}
              $borderRadius="10px"
            />
          </div>
        ))}
      </Slider>
    </SliderContainer>
  );
}

export default CustomPaging;

const SliderContainer = styled.div`
  .slick-slide div:focus {
    outline: none;
  }

  .slick-dots.slick-thumb {
    bottom: -7rem;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    cursor: grab;
  }

  .slick-dots.slick-thumb li {
    width: 6rem;
    height: 6rem;
    margin: 1;
    display: inline-block;
  }

  /* active background */
  .slick-dots.slick-thumb li img {
    filter: grayscale(100%);
  }

  .slick-dots.slick-thumb li.slick-active img {
    filter: grayscale(0%);
  }

  /* scroll bar */
  .slick-dots.slick-thumb::-webkit-scrollbar {
    height: 5px;
  }

  .slick-dots.slick-thumb::-webkit-scrollbar-thumb {
    background: #dec173;
    border-radius: 10px;
  }

  .slick-dots.slick-thumb::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  .slick-dots.slick-thumb::-webkit-scrollbar-track {
    background: #a5adb8;
    border-radius: 10px;
  }
`;
