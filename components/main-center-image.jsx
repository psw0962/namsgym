import React, { useState } from 'react';
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

  const handleSlideClick = center => {
    if (!isDragging) {
      router.push(`/center/${center.id}`);
    }
  };

  return (
    <SwiperContainer>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={9}
        slidesPerGroup={3}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          1024: {
            slidesPerView: 9,
            slidesPerGroup: 3,
          },
        }}
        onSliderMove={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(false)}
      >
        {centerInfo.map(x => (
          <SwiperSlide key={x.id}>
            <SlideContent onClick={() => handleSlideClick(x)}>
              <ImageComponent
                width={10}
                height={10}
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

      {/* 커스텀 네비게이션 버튼 */}
      <CustomNavButton className="swiper-button-prev-custom left">
        <ImageComponent
          width={2}
          height={2}
          $src="/leftarrow.svg"
          $alt="Previous"
        />
      </CustomNavButton>

      <CustomNavButton className="swiper-button-next-custom right">
        <ImageComponent
          width={2}
          height={2}
          $src="/rightarrow.svg"
          $alt="Next"
        />
      </CustomNavButton>
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

const CustomNavButton = styled.div`
  position: absolute;
  top: 40%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;

  &.left {
    left: -3rem;

    @media screen and (max-width: 500px) {
      left: -2rem;
    }
  }

  &.right {
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
