import React, { useState, useEffect } from 'react';
import Slick from 'react-slick';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import ImageComponent from '../image-component';

const TrainerImages = ({ images }) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [forceRender, setForceRender] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setForceRender(true);
    } else {
      setForceRender(false);
    }
  }, [isOpen, photoIndex, images]);

  const openLightbox = index => {
    if (!isDragging) {
      setPhotoIndex(index);
      setIsOpen(true);
    }
  };

  const CustomNextArrow = props => {
    const { onClick } = props;
    return (
      <ArrowWrapper
        className="right-arrow"
        onClick={e => {
          e.stopPropagation();
          onClick();
        }}
      >
        <ImageComponent
          width={3}
          height={3}
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
          onClick();
        }}
      >
        <ImageComponent
          width={3}
          height={3}
          $src="/leftarrow.svg"
          $alt="Previous"
        />
      </ArrowWrapper>
    );
  };

  const settings = {
    dots: true,
    arrows: true,
    autoplay: true,
    draggable: false,
    slidesToShow: 4,
    slidesToScroll: 2,
    speed: 1000,
    beforeChange: () => setIsDragging(true),
    afterChange: () => setIsDragging(false),
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      {isOpen && (
        <Lightbox
          key={forceRender}
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}

      <StyledSlick {...settings}>
        {images?.map((item, index) => (
          <ImageComponent
            key={`image${index}`}
            width={30}
            height={30}
            $borderRadius="10px"
            $cursor="pointer"
            $src={item}
            $alt={`slick${index}`}
            onClick={() => openLightbox(index)}
          />
        ))}
      </StyledSlick>
    </div>
  );
};

export default TrainerImages;

const ArrowWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 2;

  &.left-arrow {
    left: -3rem;

    @media screen and (max-width: 500px) {
      left: 0rem;
    }
  }

  &.right-arrow {
    right: -3rem;

    @media screen and (max-width: 500px) {
      right: 0rem;
    }
  }

  img {
    width: 2rem;
    height: 2rem;
  }
`;

const StyledSlick = styled(Slick)`
  .slick-slide div:focus {
    outline: none;
  }

  .slick-slide {
    display: flex;
    justify-content: center;
  }

  .slick-list {
    padding-bottom: 10px;
  }
`;
