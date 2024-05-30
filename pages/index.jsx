import Font from '@/components/font';
import styled from 'styled-components';
import centerInfo from '@/constant/center-info';
import ImageComponent from '@/components/image-component';
import Pre from '@/components/pre';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useInView } from 'react-intersection-observer';
import 'animate.css';

const Home = () => {
  const router = useRouter();

  const { ref: ref5, inView: inView5 } = useInView({
    triggerOnce: true,
    threshold: 0.01,
  });

  const { ref: ref6, inView: inView6 } = useInView({
    triggerOnce: true,
    threshold: 0.01,
  });

  const { ref: ref7, inView: inView7 } = useInView({
    triggerOnce: true,
    threshold: 0.01,
  });

  const { ref: ref8, inView: inView8 } = useInView({
    triggerOnce: true,
    threshold: 0.01,
  });

  const { ref: ref9, inView: inView9 } = useInView({
    triggerOnce: true,
    threshold: 0.01,
  });

  return (
    <Frame>
      <OverFlowFrame>
        <OverFlowWrapper className="animate__bounceIn">
          {centerInfo.map(x => {
            return (
              <div
                key={x.id}
                className="inner-wrapper"
                onClick={() => router.push(`/center/${x.id}`)}
              >
                <ImageComponent
                  width={10}
                  height={10}
                  $src={x.thumbnailImage}
                  $alt={`slide-${x.id}`}
                  $borderRadius="10px"
                />

                <Font $fontSize="1.2rem" $fontWeight={700}>
                  {x.centerName}
                </Font>
              </div>
            );
          })}
        </OverFlowWrapper>
      </OverFlowFrame>

      <Pre
        className="animate__animated animate__bounce"
        $fontSize="10rem"
        $fontWeight={700}
        $margin="15rem auto 1rem auto"
        $lineHeight={1.3}
        $whiteSpace="pre-wrap"
      >
        {`여기에 들어갈
워딩을 정해야합니다.`}
      </Pre>

      <Pre
        className="animate__animated animate__bounce"
        $fontSize="5rem"
        $fontWeight={700}
        $margin="5rem auto 1rem auto"
        $lineHeight={1.3}
        $whiteSpace="pre-wrap"
      >
        {`여기에 들어갈
워딩을 정해야합니다`}
      </Pre>

      {/* 1 */}
      <ImageWithTextFrame>
        <ImageCard className="animate__animated animate__fadeInLeft">
          <Image
            src="/images/center/center1/facility/1.jpg"
            alt="test"
            quality={70}
            style={{ objectFit: 'cover' }}
            fill
            priority
            sizes="100%"
            placeholder="blur"
            blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
          />
        </ImageCard>

        <div className="wrapper animate__animated animate__fadeInRight">
          <Pre
            $fontSize="5rem"
            $fontWeight={700}
            $margin="5rem auto 1rem auto"
            $lineHeight={1.3}
            $whiteSpace="pre-wrap"
          >
            {`여기에 들어갈
워딩을 정해야합니다`}
          </Pre>

          <Pre
            $fontSize="3rem"
            $fontWeight={700}
            $lineHeight={1.3}
            $whiteSpace="pre-wrap"
            $margin="0 auto"
            color="#A7B0B9"
          >
            {`여기에 들어갈
워딩을 정해야합니다`}
          </Pre>
        </div>
      </ImageWithTextFrame>

      {/* 2 */}
      <ImageWithTextFrame>
        <div
          ref={ref5}
          className={`animate__animated ${
            inView5 ? 'animate__fadeInLeft' : ''
          }`}
        >
          <Pre
            $fontSize="5rem"
            $fontWeight={700}
            $margin="5rem auto 1rem auto"
            $lineHeight={1.3}
            $whiteSpace="pre-wrap"
          >
            {`여기에 들어갈
워딩을 정해야합니다`}
          </Pre>

          <Pre
            $fontSize="3rem"
            $fontWeight={700}
            $lineHeight={1.3}
            $whiteSpace="pre-wrap"
            color="#D6B86B"
            $margin="0 auto"
          >
            {`여기에 들어갈
워딩을 정해야합니다`}
          </Pre>
        </div>

        <ImageCard
          ref={ref6}
          className={`animate__animated ${
            inView6 ? 'animate__fadeInRight' : ''
          }`}
        >
          <Image
            src="/images/center/center1/facility/1.jpg"
            alt="test"
            quality={70}
            style={{ objectFit: 'cover' }}
            fill
            priority
            sizes="100%"
            placeholder="blur"
            blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
          />
        </ImageCard>
      </ImageWithTextFrame>

      {/* 3 */}
      <ImageWithTextFrame>
        <ImageCard
          ref={ref7}
          className={`animate__animated ${
            inView7 ? 'animate__fadeInLeft' : ''
          }`}
        >
          <Image
            src="/images/center/center1/facility/1.jpg"
            alt="test"
            quality={70}
            style={{ objectFit: 'cover' }}
            fill
            priority
            sizes="100%"
            placeholder="blur"
            blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
          />
        </ImageCard>

        <div
          ref={ref8}
          className={`animate__animated ${
            inView8 ? 'wrapper animate__fadeInRight' : ''
          }`}
        >
          <Pre
            $fontSize="5rem"
            $fontWeight={700}
            $margin="5rem auto 1rem auto"
            $lineHeight={1.3}
            $whiteSpace="pre-wrap"
          >
            {`여기에 들어갈
워딩을 정해야합니다`}
          </Pre>

          <Pre
            $fontSize="3rem"
            $fontWeight={700}
            $lineHeight={1.3}
            $whiteSpace="pre-wrap"
            color="#A7B0B9"
            $margin="0 auto"
          >
            {`여기에 들어갈
워딩을 정해야합니다`}
          </Pre>
        </div>
      </ImageWithTextFrame>

      <WelcomeFrame
        ref={ref9}
        className={`animate__animated ${inView9 ? 'animate__bounceIn' : ''}`}
      >
        <div className="inner-frame">
          <Pre
            $fontSize="3rem"
            color="#000"
            $fontWeight={400}
            $lineHeight={1.4}
            $whiteSpace="pre-wrap"
          >
            {` 워딩을 정해야합니다.  워딩을 정해야합니다.  워딩을 정해야합니다.  워딩을 정해야합니다.  워딩을 정해야합니다.  워딩을 정해야합니다.  워딩을 정해야합니다.  워딩을 정해야합니다.  워딩을 정해야합니다.
 워딩을 정해야합니다.  워딩을 정해야합니다.  워딩을 정해야합니다.  워딩을 정해야합니다.  워딩을 정해야합니다.  워딩을 정해야합니다.  워딩을 정해야합니다.  워딩을 정해야합니다.  워딩을 정해야합니다.
 워딩을 정해야합니다.  워딩을 정해야합니다.  워딩을 정해야합니다.  워딩을 정해야합니다.  워딩을 정해야합니다.  워딩을 정해야합니다.  워딩을 정해야합니다.  워딩을 정해야합니다.  워딩을 정해야합니다.
 워딩을 정해야합니다.  워딩을 정해야합니다.  워딩을 정해야합니다.  워딩을 정해야합니다.  워딩을 정해야합니다.  워딩을 정해야합니다.  워딩을 정해야합니다.  워딩을 정해야합니다.  워딩을 정해야합니다.
 워딩을 정해야합니다.  워딩을 정해야합니다.  워딩을 정해야합니다.  워딩을 정해야합니다.  워딩을 정해야합니다.  워딩을 정해야합니다.  워딩을 정해야합니다.  워딩을 정해야합니다.  워딩을 정해야합니다.
 워딩을 정해야합니다.  워딩을 정해야합니다.  워딩을 정해야합니다.  워딩을 정해야합니다.  워딩을 정해야합니다.  워딩을 정해야합니다.  워딩을 정해야합니다.  워딩을 정해야합니다. 워딩을 정해야합니다.`}
          </Pre>
        </div>

        <div className="ceo-image">사진</div>
      </WelcomeFrame>
    </Frame>
  );
};

export default Home;

const Frame = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const OverFlowFrame = styled.div`
  display: flex;
  width: 100%;
  overflow-x: hidden;
`;

const OverFlowWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
  overflow-y: hidden;

  &::-webkit-scrollbar {
    display: none;
  }

  .inner-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
  }
`;

const ImageWithTextFrame = styled.div`
  margin-top: 25rem;
  display: flex;
  gap: 4rem;
  justify-content: space-around;

  @media screen and (max-width: 500px) {
    flex-direction: column;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
  }
`;

const WelcomeFrame = styled.div`
  position: relative;
  display: flex;
  background-color: #ededed;
  padding: 3rem;
  border-radius: 10px;
  margin: 15rem 0 15rem 0;

  .inner-frame {
    width: 100%;
    display: flex;
    background-color: #fff;
    padding: 3rem 3rem 20rem 3rem;
    border-radius: 10px;
  }

  .ceo-image {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 20rem;
    height: 20rem;
    border: 1px solid red;
    border-radius: 10px;
  }
`;

const ImageCard = styled.div`
  display: flex;
  position: relative;
  width: 50rem;
  height: 50rem;

  @media screen and (max-width: 500px) {
    width: 44rem;
    height: 44rem;
  }

  img {
    position: absolute;
    border-radius: 10px;
  }
`;
