import React, { useState } from 'react';
import styled from 'styled-components';
import ImageComponent from './image-component';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const CenterGallery = ({ images }) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const openLightbox = index => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <Frame>
      {isOpen && (
        <Lightbox
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

      {images?.map((item, index) => (
        <ImageCard key={item} onClick={() => openLightbox(index)}>
          <ImageComponent
            width={35}
            height={35}
            $src={item}
            $alt={`${item}${index}`}
            $borderRadius="10px"
            $cursor="pointer"
          />
        </ImageCard>
      ))}
    </Frame>
  );
};

export default CenterGallery;

const Frame = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;

const ImageCard = styled.div`
  display: flex;
`;
