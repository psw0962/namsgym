import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Image from 'next/image';

const CenterGallery = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(9);

  useEffect(() => {
    const arr = [...images];
    const result = arr.map(x => ({ src: x }));
    setData(result);
  }, [images]);

  const handleImageClick = index => {
    setSelectedIndex(index);
    setIsOpen(true);
  };

  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 9);
  };

  return (
    <div>
      <Frame>
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          slides={data}
          index={selectedIndex}
        />

        {images?.slice(0, visibleCount).map((item, index) => (
          <ImageCard key={item} onClick={() => handleImageClick(index)}>
            <Image
              src={item}
              alt={`${item}${index}`}
              quality={70}
              style={{ objectFit: 'cover' }}
              fill
              priority
              sizes="100%"
              placeholder="blur"
              blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
            />
          </ImageCard>
        ))}
      </Frame>
      {visibleCount < images?.length && (
        <LoadMoreButton onClick={handleLoadMore}>Load More</LoadMoreButton>
      )}
    </div>
  );
};

export default CenterGallery;

const Frame = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ImageCard = styled.div`
  display: flex;
  position: relative;
  width: 35rem;
  height: 35rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 10px;

  @media screen and (max-width: 500px) {
    width: 21.5rem;
    height: 21.5rem;
  }

  img {
    position: absolute;
    cursor: pointer;
    border-radius: 10px;
  }

  @media screen and (min-width: 500px) {
    &:hover img {
      transform: scale(1.05);
      transition: transform 0.2s ease-in-out;
    }
  }
`;

const LoadMoreButton = styled.button`
  display: block;
  margin: 4rem auto;
  padding: 2rem 4rem;
  background-color: #c5a75b;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1.6rem;
  cursor: pointer;
`;
