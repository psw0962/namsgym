import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import Overflow from '../overflow';

const CenterImage = ({ images }) => {
  const slickRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: false,
    arrows: false,
    autoplay: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    beforeChange: (oldIndex, newIndex) => {
      setActiveIndex(newIndex);
    },
  };

  useEffect(() => {
    if (slickRef.current) {
      slickRef.current.slickGoTo(activeIndex);
    }
  }, [activeIndex]);

  return (
    <>
      <CustomSlider {...settings} ref={slickRef}>
        {images?.map((image, index) => (
          <ImageCard key={index}>
            <Image
              src={image}
              alt={`${image}${index}`}
              quality={100}
              style={{
                objectFit: 'cover',
                width: '100%',
                height: '100%',
              }}
              fill
              priority
              sizes="100%"
              placeholder="blur"
              blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
            />
          </ImageCard>
        ))}
      </CustomSlider>

      <Overflow
        propsImages={images}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
    </>
  );
};

export default CenterImage;

const CustomSlider = styled(Slider)``;

const ImageCard = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  min-height: 30rem;
  max-height: 60rem;
  border-radius: 10px;
  overflow: hidden;

  img {
    position: absolute;
    cursor: pointer;
    border-radius: 10px;
    object-position: center;
  }

  @media screen and (max-width: 500px) {
    aspect-ratio: 1 / 1;
    min-height: 20rem;
    max-height: 35rem;
  }
`;
