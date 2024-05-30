import React, { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import ImageComponent from '../image-component';
import Overflow from '../overflow';

const CenterImages = ({ images }) => {
  const slickRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: false,
    arrows: true,
    autoplay: false,
    draggable: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 100,
    beforeChange: (oldIndex, newIndex) => setActiveIndex(newIndex),
  };

  useEffect(() => {
    if (slickRef.current) {
      slickRef.current.slickGoTo(activeIndex);
    }
  }, [activeIndex]);

  return (
    <>
      <Slider {...settings} ref={slickRef}>
        {images?.map((image, index) => (
          <div key={index}>
            <ImageComponent
              // width={'100%'}
              height={70}
              $src={image}
              $alt={`slide-${index}`}
              $borderRadius="10px"
            />
          </div>
        ))}
      </Slider>

      <Overflow
        propsImages={images}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
    </>
  );
};

export default CenterImages;
