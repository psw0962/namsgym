import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import useScrollEvent from '@/hooks/useScrollEvent';
import Font from './font';
import ImageComponent from './image-component';

const NAVIGATION_MENU = [
  { id: 1, menu: 'NamsGYM', url: '/' },
  { id: 2, menu: '지점 안내', url: '/center' },
  {
    id: 3,
    menu: '채용 안내',
    url: 'https://nonstop-attraction-3c8.notion.site/382e1fb43d6741c2afaedf971c33fd7d',
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
            width={5}
            height={5}
            $cursor="pointer"
            $zIndex={10}
            $src="/logo.svg"
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
            </MobileMenuWrapper>
          </MobileMenuFrame>
        </Container>
      </NavigationFrame>
    </Frame>
  );
};

export default Navigation;

const Frame = styled.div`
  position: sticky;
  top: 0;
  z-index: 3;

  height: 8rem;
  visibility: ${props => (props.$scrollEventState ? 'hidden' : 'visible')};
  opacity: ${props => (props.$scrollEventState ? 0 : 1)};
  transition: all 0.2s;
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

  max-width: 140rem;
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
  width: 60%;

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
