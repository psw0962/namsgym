import { useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const ProgressiveImage = ({
  src,
  alt,
  priority = false,
  quality = 75,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  return (
    <ImageWrapper $isLoading={isLoading}>
      <Image
        src={src}
        alt={alt}
        quality={quality}
        priority={priority}
        loading={priority ? 'eager' : 'lazy'}
        onLoad={handleLoadComplete}
        {...props}
      />
      {isLoading && <LoadingShimmer />}
    </ImageWrapper>
  );
};

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const LoadingShimmer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: shimmer 2s infinite;
  border-radius: 10px;

  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }
`;

export default ProgressiveImage;
