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
      </OverFlowFrame>

      <Pre
        className="animate__animated animate__Left"
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
        className="animate__animated animate__fadeInRight"
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
        className={`animate__animated ${inView9 ? 'animate__fadeIn' : ''}`}
      >
        <div className="inner-frame">
          <div>
            <Pre
              $fontSize="2.6rem"
              color="#000"
              $fontWeight={400}
              $lineHeight={1.4}
              $whiteSpace="pre-wrap"
            >
              {`건강한 삶을 원하는 모든 분들을 위해 최선을 다하는
피트니스 브랜드 남스짐입니다.`}
            </Pre>

            <Pre
              $fontSize="2rem"
              color="#000"
              $fontWeight={400}
              $lineHeight={1.4}
              $whiteSpace="pre-wrap"
              $margin="2rem 0 0 0"
            >
              {`안녕하세요,

㈜남다른사람들 남스짐 피트니스 대표 남건우입니다.

저희는 2017년 5월 1호점을 시작으로 전국 각지에 직영으로 운영하며 매년
꾸준한 성장을 이루어 왔습니다.

남스짐은 고객님들께 남다른 서비스와 가치를 제공하여 건강한 삶의 기준을
제시하는 것을 목표로 하고 있습니다.

저희 전 직원은 ‘도전’, ‘성장’, ‘변화’, ‘긍정’, ‘성과’라는 핵심 가치를 바탕으로
성실하고 정직하게 성장하고 있습니다.
이러한 가치는 저희가 고객님들께 신뢰를 드릴 수 있는 원동력이 됩니다.

고객 만족을 최우선으로 생각하며, 피트니스 시장에서 모범이 되는 기업이
되기 위해 항상 최선을 다하겠습니다.

남스짐을 찾아주셔서 진심으로 감사드립니다.`}
            </Pre>
          </div>

          <div className="ceo-image">
            <ImageComponent
              width={35}
              height={55}
              $src="/ceo.jpeg"
              $alt="ceo"
              $borderRadius="10px"
            />

            <Pre
              $fontSize="2rem"
              color="#000"
              $fontWeight={400}
              $lineHeight={1.4}
              $whiteSpace="pre-wrap"
              $margin="2rem 0 0 0"
              $textAlign="center"
            >
              {`남건우`}
            </Pre>

            <Pre
              $fontSize="1.6rem"
              color="#C1C1C1"
              $fontWeight={400}
              $lineHeight={1.4}
              $whiteSpace="pre-wrap"
              $textAlign="center"
            >
              {`(주)남다른사람들 대표`}
            </Pre>
          </div>
        </div>
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
    height: 100%;
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    padding: 3rem 3rem 3rem 3rem;
    border-radius: 10px;

    @media screen and (max-width: 500px) {
      flex-direction: column;
    }
  }

  .ceo-image {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

    @media screen and (max-width: 500px) {
      margin-top: 2rem;
    }
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
