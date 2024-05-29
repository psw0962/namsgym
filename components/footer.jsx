import styled from 'styled-components';
import Font from './font';
import ImageComponent from './image-component';
import { useRouter } from 'next/router';

const Footer = () => {
  const router = useRouter();
  return (
    <FooterFrame>
      <Wrapper>
        <div>
          <LogoWrapper>
            <ImageComponent
              width={7}
              height={7}
              $cursor="pointer"
              $src="/logo.svg"
              $alt="logo"
              onClick={() => router.push('/')}
            />

            <CustomFont>NamsGym</CustomFont>
          </LogoWrapper>

          <InnerWrapper>
            <Font $fontSize="1.3rem" $fontWeight="500" $margin="0 0 2rem 0">
              상호명 | (주)남다른사람들
            </Font>

            <Font $fontSize="1.3rem" $fontWeight="500" $margin="0 0 2rem 0">
              사업자등록번호 | 282-85-02247
            </Font>
          </InnerWrapper>

          <InnerWrapper>
            <Font $fontSize="1.3rem" $fontWeight="500" $margin="0 0 2rem 0">
              대표자명 | 남건우
            </Font>

            <Font $fontSize="1.3rem" $fontWeight="500" $margin="0 0 2rem 0">
              주소 | 경기 안산시 단원구 새뿔길 48 월산빌딩 지하 1층, 3층
            </Font>
          </InnerWrapper>

          <InnerWrapper>
            <Font $fontSize="1.3rem" $fontWeight="500" $margin="0 0 2rem 0">
              전화번호 | 010-4756-3376
            </Font>

            <Font $fontSize="1.3rem" $fontWeight="500" $margin="0 0 2rem 0">
              이메일 | namgh90@nate.com
            </Font>
          </InnerWrapper>

          <Font $fontSize="1.3rem" $fontWeight="500" $margin="0 0 2rem 0">
            Copyrightⓒ (주)남다른사람들. All Rights Reserved.
          </Font>

          <InnerWrapper>
            <a
              href="https://www.instagram.com/namsgym_official_/?igsh=NjR0NXo3dDFlYmZi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImageComponent
                width={4}
                height={4}
                $cursor="pointer"
                $src="/footer-instagram.svg"
                $alt="footer-instagram"
                $borderRadius="10px"
              />
            </a>

            <a
              href="https://www.youtube.com/@pt7066"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImageComponent
                width={4}
                height={4}
                $cursor="pointer"
                $src="/footer-youtube.svg"
                $alt="footer-youtube"
                $borderRadius="10px"
              />
            </a>

            <a
              href="https://pf.kakao.com/_FxgHWd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImageComponent
                width={4}
                height={4}
                $cursor="pointer"
                $src="/footer-kakaotalk.svg"
                $alt="footer-kakaotalk"
                $borderRadius="10px"
              />
            </a>

            <a
              href="https://map.naver.com/p/search/%EB%82%A8%EC%8A%A4%EC%A7%90?c=15.00,0,0,0,dh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImageComponent
                width={3.5}
                height={3.5}
                $cursor="pointer"
                $src="/footer-naver.svg"
                $alt="footer-naver"
                $borderRadius="10px"
              />
            </a>
          </InnerWrapper>
        </div>
      </Wrapper>
    </FooterFrame>
  );
};

export default Footer;

const FooterFrame = styled.div`
  background-color: #212121;
  color: #dadada;
  width: 100vw;
`;

const Wrapper = styled.div`
  padding: 2.4rem 6rem 2.4rem 6rem;
  max-width: 120rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 500px) {
    padding: 2.4rem 3rem 2.4rem 3rem;
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const LogoWrapper = styled.div`
  display: flex;
  margin-bottom: 3rem;
`;

const CustomFont = styled(Font)`
  display: flex;
  align-items: flex-end;
  font-size: 3rem;
  font-weight: 700;
`;
