import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import useScrollEvent from '@/hooks/useScrollEvent';
import Font from './font';
import ImageComponent from './image-component';

const NAVIGATION_MENU = [
  { id: 1, menu: '지점 안내', url: '/center' },
  { id: 2, menu: '비포&애프터', url: '/review' },
  {
    id: 3,
    menu: '채용 안내',
    url: 'https://nonstop-attraction-3c8.notion.site/382e1fb43d6741c2afaedf971c33fd7d',
  },
  {
    id: 4,
    menu: '명예 트레이너',
    url: '/hornor',
  },
];

const Navigation = () => {
  const router = useRouter();
  const { $scrollEventState } = useScrollEvent();
  const [isMobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    if (isMobileMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenu]);

  return (
    <Frame
      $scrollEventState={
        $scrollEventState ? $scrollEventState.toString() : undefined
      }
    >
      <NavigationFrame>
        <Container>
          <ImageComponent
            width={4}
            height={4}
            $cursor="pointer"
            $zIndex={10}
            $src="/logo.png"
            $alt="logo"
            onClick={() => router.push('/')}
          />

          {/* desktop */}
          <DeskTopMenuWrapper>
            <MenuWrapper>
              {NAVIGATION_MENU.map(x => {
                return (
                  <CustomLi
                    key={x.id}
                    $fontSize="2.4rem"
                    $fontWeight={700}
                    onClick={() => {
                      router.push(`${x.url}`);
                    }}
                  >
                    <span>{x.menu}</span>
                  </CustomLi>
                );
              })}
            </MenuWrapper>

            <InnerWrapper $marginLeftIsTrue={true}>
              <a
                href="https://www.youtube.com/@pt7066"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ImageComponent
                  width={3}
                  height={3}
                  $cursor="pointer"
                  $src="/youtube.svg"
                  $alt="youtube"
                  $borderRadius="10px"
                />
              </a>

              <a
                href="https://www.instagram.com/namsgym_official_/?igsh=NjR0NXo3dDFlYmZi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ImageComponent
                  width={3}
                  height={3}
                  $cursor="pointer"
                  $src="/instagram.svg"
                  $alt="instagram"
                  $borderRadius="10px"
                />
              </a>

              <a
                href="https://pf.kakao.com/_FxgHWd"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ImageComponent
                  width={3}
                  height={3}
                  $cursor="pointer"
                  $src="/kakaotalk.svg"
                  $alt="kakaotalk"
                  $borderRadius="10px"
                />
              </a>

              <a
                href="https://map.naver.com/p/search/%EB%82%A8%EC%8A%A4%EC%A7%90?c=15.00,0,0,0,dh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ImageComponent
                  width={3}
                  height={3}
                  $cursor="pointer"
                  $src="/naver.svg"
                  $alt="naver"
                  $borderRadius="10px"
                />
              </a>
            </InnerWrapper>
          </DeskTopMenuWrapper>

          {/* mobile */}
          <MobileMenuFrame>
            {isMobileMenu && (
              <ImageComponent
                width={3}
                height={3}
                $cursor="pointer"
                $zIndex={10}
                $src="/close.svg"
                $alt="close"
                onClick={() => setMobileMenu(!isMobileMenu)}
              />
            )}

            {!isMobileMenu && (
              <ImageComponent
                width={3}
                height={3}
                $cursor="pointer"
                $src="/menu.svg"
                $alt="menu"
                onClick={() => setMobileMenu(!isMobileMenu)}
              />
            )}

            <MobileMenuWrapper
              className={isMobileMenu ? 'showMobildeMenu' : 'hideMobildeMenu'}
            >
              {NAVIGATION_MENU.map(x => {
                return (
                  <Font
                    key={x.id}
                    $fontSize="3.2rem"
                    $cursor="pointer"
                    $fontWeight={700}
                    onClick={() => {
                      setMobileMenu(!isMobileMenu);
                      router.push(`${x.url}`);
                    }}
                  >
                    {x.menu}
                  </Font>
                );
              })}

              <InnerWrapper $marginLeftIsTrue={false}>
                <a
                  href="https://www.youtube.com/@pt7066"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ImageComponent
                    width={4}
                    height={4}
                    $cursor="pointer"
                    $src="/youtube.svg"
                    $alt="youtube"
                    $borderRadius="10px"
                  />
                </a>

                <a
                  href="https://www.instagram.com/namsgym_official_/?igsh=NjR0NXo3dDFlYmZi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ImageComponent
                    width={4}
                    height={4}
                    $cursor="pointer"
                    $src="/instagram.svg"
                    $alt="instagram"
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
                    $src="/kakaotalk.svg"
                    $alt="kakaotalk"
                    $borderRadius="10px"
                  />
                </a>

                <a
                  href="https://map.naver.com/p/search/%EB%82%A8%EC%8A%A3.5%EC%A7%90?c=15.00,0,0,0,dh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ImageComponent
                    width={4}
                    height={4}
                    $cursor="pointer"
                    $src="/naver.svg"
                    $alt="naver"
                    $borderRadius="10px"
                  />
                </a>
              </InnerWrapper>
            </MobileMenuWrapper>
          </MobileMenuFrame>
        </Container>
      </NavigationFrame>
    </Frame>
  );
};

export default Navigation;

const Frame = styled.div`
  position: fixed;
  top: 0;
  z-index: 3;

  /* height: 10rem; */
  /* visibility: ${props =>
    props.$scrollEventState ? 'hidden' : 'visible'}; */
  /* opacity: ${props => (props.$scrollEventState ? 0 : 1)}; */
  /* transition: all 0.2s; */
`;

const NavigationFrame = styled.header`
  background: #fff;
  position: absolute;
  width: 100vw;
  margin-left: calc(-50vw + 50%);

  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 120rem;
  margin: 0 auto;
  padding: 1.5rem 6rem;

  @media screen and (max-width: 500px) {
    padding: 2.4rem 3rem 2.4rem 3rem;
  }
`;

const MobileMenuFrame = styled.div`
  display: none;

  @media screen and (max-width: 500px) {
    display: flex;
  }
`;

const MenuWrapper = styled.ul`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 7rem;
`;

const DeskTopMenuWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const MobileMenuWrapper = styled.div`
  visibility: hidden;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #fff;
  z-index: 2;
  transition: all 0.3s;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  &.showMobildeMenu {
    visibility: visible;
    opacity: 1;
  }

  &.hideMobildeMenu {
    opacity: 0;
  }
`;

const CustomLi = styled.li`
  cursor: pointer;
  white-space: nowrap;
  font-size: ${props => (props.$fontSize ? props.$fontSize : '1.6rem')};
  line-height: ${props => (props.$lineHeight ? props.$lineHeight : '')};
  font-weight: ${props => (props.$fontWeight ? props.$fontWeight : 400)};
  margin: ${props => (props.$margin ? props.$margin : '')};
`;

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-left: ${props => (props.$marginLeftIsTrue ? '7rem' : 0)};
`;
