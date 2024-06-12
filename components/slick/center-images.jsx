import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import Overflow from '../overflow';

const CenterImages = ({ images }) => {
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
              style={{ objectFit: 'cover' }}
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

export default CenterImages;

const CustomSlider = styled(Slider)``;

const ImageCard = styled.div`
  display: flex;
  position: relative;
  height: 70rem;
  border-radius: 10px;

  img {
    position: absolute;
    cursor: pointer;
    border-radius: 10px;
  }

  @media screen and (max-width: 500px) {
    height: 40rem;
  }
`;
