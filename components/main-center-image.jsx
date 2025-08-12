import React, { useState, useEffect } from 'react';
import centerInfo from '@/constant/center-info';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import ImageComponent from '@/components/image-component';
import Font from '@/components/font';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/navigation';

const MainCenterImage = () => {
  const router = useRouter();
  const [isDragging, setIsDragging] = useState(false);
  const [imageSize, setImageSize] = useState(11.5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 500) {
        setImageSize(8);
      } else {
        setImageSize(11.5);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSlideClick = center => {
    if (!isDragging) {
      router.push(`/center/${center.id}`);
    }
  };

  return (
    <SwiperContainer>
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={5.2}
        slidesPerGroup={1}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          500: {
            slidesPerView: 8.5,
            slidesPerGroup: 1,
          },
        }}
        onSliderMove={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(false)}
      >
        {centerInfo.map(x => (
          <SwiperSlide key={x.id}>
            <SlideContent onClick={() => handleSlideClick(x)}>
              <ImageComponent
                width={imageSize}
                height={imageSize}
                $src={x.thumbnailImage}
                $alt={`slide-${x.id}`}
                $borderRadius="10px"
                $cursor="pointer"
              />
              <Font $fontSize="1.4rem" $fontWeight={700}>
                {x.centerName}
              </Font>
            </SlideContent>
          </SwiperSlide>
        ))}
      </Swiper>
    </SwiperContainer>
  );
};

export default MainCenterImage;

const SwiperContainer = styled.div`
  position: relative;
  width: 100%;
`;

const SlideContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
`;
