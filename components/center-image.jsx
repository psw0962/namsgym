import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styled from 'styled-components';

const CenterImage = ({ images }) => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = swiper => {
    setActiveIndex(swiper.activeIndex);
  };

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(activeIndex);
    }
  }, [activeIndex]);

  return (
    <CustomSwiper
      ref={swiperRef}
      modules={[Navigation, Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      speed={500}
      loop={true}
      pagination={{
        clickable: true,
      }}
      onSlideChange={handleSlideChange}
    >
      {images?.map((image, index) => (
        <SwiperSlide key={index}>
          <ImageCard>
            <Image
              src={image}
              alt={`${image}${index}`}
              quality={80}
              style={{
                objectFit: 'cover',
                width: '100%',
                height: '100%',
              }}
              fill
              priority={index === 0}
              sizes="(max-width: 768px) 100vw, 80vw"
              placeholder="blur"
              blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
            />
          </ImageCard>
        </SwiperSlide>
      ))}
    </CustomSwiper>
  );
};

export default CenterImage;

const CustomSwiper = styled(Swiper)`
  width: 100%;

  .swiper-pagination-bullet {
    background-color: rgba(255, 255, 255, 0.6);
    width: 10px;
    height: 10px;
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    background-color: #c4af6e;
    transform: scale(1.2);
  }

  .swiper-pagination {
    bottom: 10px;
  }
`;

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
