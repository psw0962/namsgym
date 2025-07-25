import styled from 'styled-components';
import ImageComponent from '@/components/image-component';
import Pre from '@/components/pre';
import Image from 'next/image';
import 'animate.css';
import MainCenterImage from '@/components/main-center-image';
import Reviews from '@/components/reviews';

const Home = () => {
  return (
    <Frame>
      <MainCenterImage />

      <Pre
        className="animate__animated animate__Left"
        $fontSize="2.6rem"
        $fontWeight={700}
        $margin="6rem auto 0 auto"
        $lineHeight={1.3}
        $textAlign="center"
      >
        {`피트니스 문화를 선도하는`}
      </Pre>

      <Pre
        className="animate__animated animate__fadeInRight"
        $fontSize="2.6rem"
        color="#D6B86B"
        $fontWeight={700}
        $lineHeight={1.3}
        $textAlign="center"
      >
        {`우리는 (주)남다른사람들입니다.`}
      </Pre>

      {/* 1 */}
      <ImageWithTextFrame>
        <ImageCard className="animate__animated animate__fadeInLeft">
          <Image
            src="/images/center/center10/facility/4.jpg"
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
          <CustomPreTop>
            {`최적의 운동 환경을
제공하기 위한`}
          </CustomPreTop>

          <Pre
            $fontSize="2.6rem"
            $fontWeight={700}
            $lineHeight={1.3}
            color="#A7B0B9"
            $textAlign="center"
          >
            {`명품 머신과
인테리어`}
          </Pre>
        </div>
      </ImageWithTextFrame>

      {/* 2 */}
      <ImageWithTextFrame>
        <div className="wrapper animate__animated animate__fadeInLeft">
          <Pre
            $fontSize="2.6rem"
            $fontWeight={700}
            $lineHeight={1.3}
            $textAlign="center"
          >
            {`전 지점 직영 운영으로
쾌적한 시설 운영과`}
          </Pre>

          <CustomPreBottom
            $fontWeight={700}
            $lineHeight={1.3}
            color="#D6B86B"
            $textAlign="center"
          >
            {`검증된 후기가 증명하는
최고의 강사진`}
          </CustomPreBottom>
        </div>

        <ImageCard className="animate__animated animate__fadeInRight">
          <Image
            src="/images/center/center5/facility/4.jpg"
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

      {/* reviews */}
      <Reviews />

      {/* welcome */}
      <WelcomeFrame>
        <div className="ceo-image-frame">
          <ImageComponent
            width={25}
            height={25}
            $src="/ceo.jpeg"
            $alt="ceo"
            $borderRadius="50%"
          />

          <Pre
            $fontSize="2rem"
            color="#000"
            $fontWeight={400}
            $lineHeight={1.4}
            $margin="3rem 0 0 0"
            $textAlign="center"
          >
            {`남건우`}
          </Pre>

          <Pre
            $fontSize="1.4rem"
            color="#C1C1C1"
            $fontWeight={400}
            $lineHeight={1.4}
            $textAlign="center"
          >
            {`(주)남다른사람들 대표`}
          </Pre>
        </div>

        <div className="inner-frame">
          <div className="msg-frame">
            <Pre
              $fontSize="2.4rem"
              color="#000"
              $fontWeight={700}
              $lineHeight={1.4}
              $textAlign="center"
            >
              {`건강한 삶을 원하는 모든 분들을 위해 최선을 다하는
피트니스 브랜드 남스짐입니다.`}
            </Pre>

            <Pre
              $fontSize="1.8rem"
              color="#000"
              $fontWeight={400}
              $lineHeight={1.4}
              $margin="4rem 0 0 0"
            >
              {`안녕하세요, ㈜남다른사람들 남스짐 피트니스 대표 남건우입니다. 저희는 2017년 5월 1호점을 시작으로 전국 각지에 직영으로 운영하며 매년 꾸준한 성장을 이루어 왔습니다.
남스짐은 고객님들께 남다른 서비스와 가치를 제공하여 건강한 삶의 기준을 제시하는 것을 목표로 하고 있습니다. 저희 전 직원은 ‘도전’, ‘성장’, ‘변화’, ‘긍정’, ‘성과’라는 핵심 가치를 바탕으로 성실하고 정직하게 성장하고 있습니다. 이러한 가치는 저희가 고객님들께 신뢰를 드릴 수 있는 원동력이 됩니다.
고객 만족을 최우선으로 생각하며, 피트니스 시장에서 모범이 되는 기업이 되기 위해 항상 최선을 다하겠습니다. 남스짐을 찾아주셔서 진심으로 감사드립니다.`}
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

const ImageWithTextFrame = styled.div`
  margin-top: 6rem;
  display: flex;
  justify-content: space-around;
  align-items: center;

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
  display: flex;
  gap: 5rem;
  margin: 13rem 0 15rem 0;

  @media screen and (max-width: 500px) {
    flex-direction: column-reverse;
    align-items: center;
  }

  .inner-frame {
    display: flex;
  }

  .ceo-image-frame {
    display: flex;
    flex-direction: column;
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

const CustomPreTop = styled(Pre)`
  font-size: 2.6rem;
  font-weight: 700;
  line-height: 1.3;
  text-align: center;

  @media screen and (max-width: 500px) {
    margin-top: 8rem;
  }
`;

const CustomPreBottom = styled(Pre)`
  font-size: 2.6rem;
  font-weight: 700;
  line-height: 1.3;
  text-align: center;

  @media screen and (max-width: 500px) {
    margin-bottom: 8rem;
  }
`;
