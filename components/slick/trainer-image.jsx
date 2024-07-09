import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ImageComponent from '../image-component';
import Slick from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Image from 'next/image';

const TrainerImages = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const arr = [...images];
    const result = arr.map(x => ({ src: x }));
    setData(result);
  }, [images]);

  const handleImageClick = index => {
    if (!isDragging) {
      setSelectedIndex(index);
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
          onClick && onClick(e);
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
          onClick && onClick(e);
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
    dots: false,
    arrows: true,
    autoplay: true,
    draggable: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 100,
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
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        slides={data}
        index={selectedIndex}
      />

      {images?.length > 0 && (
        <StyledSlick {...settings}>
          {images?.map((item, index) => (
            <React.Fragment key={item}>
              <ImageCard onClick={() => handleImageClick(index)}>
                <Image
                  src={item}
                  alt={`${item}${index}`}
                  quality={70}
                  style={{ objectFit: 'cover' }}
                  fill
                  priority
                  sizes="100%"
                  placeholder="blur"
                  blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
                />
              </ImageCard>
            </React.Fragment>
          ))}
        </StyledSlick>
      )}
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

const StyledSlick = styled(Slick)`
  .slick-track {
    padding: 1rem 0;
  }
  .slick-slide div:focus {
    outline: none;
  }

  .slick-slide {
    display: flex;
    justify-content: center;
  }
`;

const ImageCard = styled.div`
  display: flex;
  position: relative;
  width: 30rem;
  height: 30rem;

  img {
    position: absolute;
    cursor: pointer;
    border-radius: 10px;
  }

  @media screen and (min-width: 500px) {
    &:hover img {
      transform: scale(1.05);
      transition: all 0.2s ease-in-out;
      border-radius: 100%;
    }
  }

  @media screen and (max-width: 500px) {
    width: 21.5rem;
    height: 21.5rem;
  }
`;
