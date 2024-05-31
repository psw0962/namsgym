import styled from 'styled-components';
import Image from 'next/image';
import Font from './font';

const Contact = () => {
  return (
    <Frame>
      <a
        href="https://pf.kakao.com/_FxgHWd"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ImageCard>
          <Image
            src="/kakaotalk.svg"
            alt="kakaotalk"
            quality={100}
            style={{ objectFit: 'cover' }}
            fill
            priority
            sizes="100%"
            placeholder="blur"
            blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
          />
        </ImageCard>

        <Font
          color="#4C4F54"
          $fontSize="1.4rem"
          $fontWeight={700}
          $textAlign="center"
          $margin="1rem 0 0 0"
        >
          1:1 문의
        </Font>
      </a>

      <a
        href="https://map.naver.com/p/search/%EB%82%A8%EC%8A%A4%EC%A7%90?c=15.00,0,0,0,dh"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ImageCard>
          <Image
            src="/naver.svg"
            alt="naver"
            quality={100}
            style={{ objectFit: 'cover' }}
            fill
            priority
            sizes="100%"
            placeholder="blur"
            blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
          />
        </ImageCard>

        <Font
          color="#4C4F54"
          $fontSize="1.4rem"
          $fontWeight={700}
          $textAlign="center"
          $margin="1rem 0 0 0"
        >
          예약
        </Font>
      </a>
    </Frame>
  );
};

export default Contact;

const Frame = styled.div`
  position: fixed;
  right: 6rem;
  bottom: 2rem;
  z-index: 9999;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and (max-width: 500px) {
    right: 2.9rem;
  }
`;

const ImageCard = styled.div`
  display: flex;
  position: relative;
  width: 5rem;
  height: 5rem;
  border-radius: 10px;
  cursor: pointer;

  img {
    position: absolute;
    cursor: pointer;
    border-radius: 10px;
  }
`;
