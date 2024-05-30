import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Overflow = ({ propsImages, activeIndex, setActiveIndex }) => {
  const thumbnailsRef = useRef(null);

  useEffect(() => {
    const scrollToCenter = () => {
      if (thumbnailsRef.current && thumbnailsRef.current.children[0]) {
        const thumbnailWidth = thumbnailsRef.current.children[0].offsetWidth;
        const scrollPosition =
          thumbnailWidth * activeIndex -
          thumbnailsRef.current.offsetWidth / 2 +
          thumbnailWidth / 2;
        thumbnailsRef.current.scrollTo({
          left: scrollPosition,
          behavior: 'smooth',
        });
      }
    };
    scrollToCenter();
  }, [activeIndex]);

  return (
    <Frame>
      <ThumbnailsWrapper>
        <Thumbnails ref={thumbnailsRef}>
          {propsImages?.map((item, index) => (
            <ImageWrapper key={index} onClick={() => setActiveIndex(index)}>
              <Image
                src={item}
                alt={`${item}${index}`}
                className={index === activeIndex ? 'active' : ''}
                quality={70}
                style={{ objectFit: 'cover' }}
                fill
                priority
                sizes="100%"
                placeholder="blur"
                blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
              />
            </ImageWrapper>
          ))}
        </Thumbnails>
      </ThumbnailsWrapper>
    </Frame>
  );
};

export default Overflow;

const Frame = styled.div``;

const ThumbnailsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  cursor: grab;
  overflow: hidden;
`;

const Thumbnails = styled.div`
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
  padding: 10px 0;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }

  /* &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #c4af6e;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  } */
`;

const ImageWrapper = styled.div`
  display: flex;
  position: relative;
  min-width: 8rem;
  height: 8rem;

  img {
    position: absolute;
    cursor: pointer;
    border-radius: 10px;

    filter: grayscale(100%);
    transition: filter 0.3s;

    &.active {
      filter: grayscale(0%);
      border: 5px solid #c4af6e;
    }
  }
`;
