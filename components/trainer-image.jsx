import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Image from 'next/image';

const TrainerImages = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const arr = [...images];
    const result = arr.map(x => ({ src: x }));
    setData(result);
  }, [images]);

  const handleImageClick = index => {
    setSelectedIndex(index);
    setIsOpen(true);
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
        <TrainerImagesWrapper>
          {images?.map((item, index) => (
            <ImageCard key={item} onClick={() => handleImageClick(index)}>
              <Image
                src={item}
                alt={`trainer-image-${index}`}
                quality={75}
                style={{ objectFit: 'cover' }}
                fill
                priority={index === 0}
                loading={index === 0 ? 'eager' : 'lazy'}
                sizes="(max-width: 500px) 50vw, 25vw"
                placeholder="blur"
                blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQpoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
              />
            </ImageCard>
          ))}
        </TrainerImagesWrapper>
      )}
    </div>
  );
};

export default TrainerImages;

const TrainerImagesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  width: 100%;

  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ImageCard = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;

  img {
    border-radius: 10px;
    transition: transform 0.2s ease-in-out;
  }

  @media screen and (min-width: 500px) {
    &:hover img {
      transform: scale(1.05);
    }
  }

  @media screen and (max-width: 500px) {
    max-width: none;
  }
`;
