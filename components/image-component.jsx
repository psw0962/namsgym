import styled from 'styled-components';
import Image from 'next/image';

const ImageComponent = props => {
  const {
    width,
    height,
    onClick,
    className,
    $cursor,
    $zIndex,
    $margin,
    $borderRadius,
    $src,
    $alt,
  } = props;

  return (
    <Frame
      className={className}
      width={width}
      height={height}
      $cursor={$cursor}
      $zIndex={$zIndex}
      $margin={$margin}
      $borderRadius={$borderRadius}
      onClick={onClick}
    >
      <Image
        src={`${$src}`}
        alt={`${$alt}`}
        quality={80}
        style={{ objectFit: 'cover' }}
        fill
        priority
        sizes="100%"
        placeholder="blur"
        blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
      />
    </Frame>
  );
};

export default ImageComponent;

const Frame = styled.div`
  position: relative;
  width: ${props => (props.width ? `${props.width}rem` : '100%')};
  height: ${props => (props.height ? `${props.height}rem` : '100%')};
  cursor: ${props => (props.$cursor ? props.$cursor : '')};
  margin: ${props => (props.$margin ? props.$margin : '')};
  z-index: ${props => (props.$zIndex ? props.$zIndex : 0)};

  img {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: ${props => (props.$borderRadius ? props.$borderRadius : 0)};
  }
`;
