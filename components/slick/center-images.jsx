import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

function CustomPaging({ images }) {
  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img src={images[i]} alt={`slide-${i}`} />
        </a>
      );
    },
    // draggable: false,
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
            <img src={image} alt={`slide-${index}`} />
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
  }

  .slick-dots.slick-thumb li {
    width: 6rem;
    height: 6rem;
    margin: 1;
  }

  .slick-dots.slick-thumb li img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    filter: grayscale(100%);
  }

  .slick-dots.slick-thumb li.slick-active img {
    filter: grayscale(0%);
  }

  .slick-slide img {
    margin: 0 auto;
    width: 100%;
    height: 50rem;
    object-fit: cover;
    border-radius: 10px;

    @media screen and (max-width: 500px) {
      width: 100%;
    }
  }
`;
