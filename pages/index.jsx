import Font from '@/components/font';
import styled from 'styled-components';
import centerInfo from '@/constant/center-info';
import ImageComponent from '@/components/image-component';
import Pre from '@/components/pre';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Home = () => {
  const router = useRouter();

  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.01,
  });

  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.01,
  });

  const { ref: ref3, inView: inView3 } = useInView({
    triggerOnce: true,
    threshold: 0.01,
  });

  const { ref: ref4, inView: inView4 } = useInView({
    triggerOnce: true,
    threshold: 0.01,
  });

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
        <motion.div
          ref={ref1}
          style={{ overflowX: 'hidden' }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={inView1 ? { opacity: 1, scale: 1 } : {}}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <OverFlowWrapper>
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
        </motion.div>
      </OverFlowFrame>

      <motion.div
        ref={ref2}
        initial={{ opacity: 0, y: 100 }}
        animate={inView2 ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <Pre
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
          $fontSize="5rem"
          $fontWeight={700}
          $margin="5rem auto 1rem auto"
          $lineHeight={1.3}
          $whiteSpace="pre-wrap"
        >
          {`여기에 들어갈
워딩을 정해야합니다`}
        </Pre>
      </motion.div>

      {/* 1 */}
      <ImageWithTextFrame>
        <motion.div
          ref={ref3}
          initial={{ opacity: 0, x: -100 }}
          animate={inView3 ? { opacity: 1, x: 0 } : {}}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <ImageCard>
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
        </motion.div>

        <motion.div
          ref={ref4}
          initial={{ opacity: 0, x: 100 }}
          animate={inView4 ? { opacity: 1, x: 0 } : {}}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div className="wrapper">
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
        </motion.div>
      </ImageWithTextFrame>

      {/* 2 */}
      <ImageWithTextFrame>
        <motion.div
          ref={ref5}
          initial={{ opacity: 0, x: -100 }}
          animate={inView5 ? { opacity: 1, x: 0 } : {}}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div className="wrapper">
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
        </motion.div>

        <motion.div
          ref={ref6}
          initial={{ opacity: 0, x: 100 }}
          animate={inView6 ? { opacity: 1, x: 0 } : {}}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <ImageCard>
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
        </motion.div>
      </ImageWithTextFrame>

      {/* 3 */}
      <ImageWithTextFrame>
        <motion.div
          ref={ref7}
          initial={{ opacity: 0, x: -100 }}
          animate={inView7 ? { opacity: 1, x: 0 } : {}}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <ImageCard>
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
        </motion.div>

        <motion.div
          ref={ref8}
          initial={{ opacity: 0, x: 100 }}
          animate={inView8 ? { opacity: 1, x: 0 } : {}}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div className="wrapper">
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
        </motion.div>
      </ImageWithTextFrame>

      <motion.div
        ref={ref9}
        initial={{ opacity: 0, y: 100 }}
        animate={inView9 ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <WelcomeFrame>
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
      </motion.div>
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
