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
              <GlassIndicator>
                <PulseRing />
                <ViewText>VIEW</ViewText>
              </GlassIndicator>
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
  aspect-ratio: 1/1;
  cursor: pointer;
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  img {
    border-radius: 16px;
    transition: all 0.4s ease;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }

  &:hover img {
    transform: scale(1.08);
    filter: brightness(0.8);
  }

  &:active {
    transform: translateY(-2px) scale(0.98);
  }

  @media screen and (max-width: 500px) {
    &:hover {
      transform: translateY(-2px);
    }

    &:hover img {
      transform: scale(1.04);
    }
  }
`;

const GlassIndicator = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.3s ease;

  ${ImageCard}:hover & {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.1);
  }

  @media screen and (max-width: 500px) {
    width: 50px;
    height: 50px;
    opacity: 0.9;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(8px);
  }
`;

const PulseRing = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border: 2px solid rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  animation: pulse 2s infinite;

  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(1.4);
      opacity: 0;
    }
  }
`;

const ViewText = styled.span`
  color: white;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 1px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  z-index: 1;
`;
