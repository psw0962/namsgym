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
    bottom: -12rem;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    cursor: grab;

    @media screen and (max-width: 500px) {
      bottom: -6rem;
    }
  }

  .slick-dots.slick-thumb li {
    display: inline-block;
    width: 10rem;
    height: 10rem;
    margin: 1;

    @media screen and (max-width: 500px) {
      width: 4.5rem;
      height: 4.5rem;
    }
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
