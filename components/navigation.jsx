import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Image from 'next/image';
import useScrollEvent from '@/hooks/useScrollEvent';
import Font from './font';

const Navigation = () => {
  const router = useRouter();
  const { scrollEventState } = useScrollEvent();
  const [isMobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    if (isMobileMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenu]);

  return (
    <Frame scrollEventState={scrollEventState}>
      <NavigationFrame>
        <Container>
          <CustomImageWrapper onClick={() => router.push('/')}>
            <CustomImage src={'/logo.svg'} alt="logo" layout="fill" />
          </CustomImageWrapper>

          {/* desktop */}
          <DeskTopMenuWrapper>
            <MenuWrapper>
              <CustomLi
                fontSize="2.556rem"
                fontWeight={700}
                onClick={() => {
                  router.push('/');
                }}
              >
                <span>지점안내</span>
              </CustomLi>
            </MenuWrapper>
          </DeskTopMenuWrapper>

          {/* mobile */}
          <MobileMenuFrame>
            {isMobileMenu && (
              <ToggleImageWrapper
                width="2rem"
                height="2rem"
                onClick={() => setMobileMenu(!isMobileMenu)}
              >
                <CustomImage src={'/close.svg'} alt="menu" layout="fill" />
              </ToggleImageWrapper>
            )}

            {!isMobileMenu && (
              <ToggleImageWrapper
                width="2rem"
                height="4.5rem"
                onClick={() => setMobileMenu(!isMobileMenu)}
              >
                <CustomImage src={'/menu.svg'} alt="menu" layout="fill" />
              </ToggleImageWrapper>
            )}

            <MobileMenuWrapper
              className={isMobileMenu ? 'showMobildeMenu' : 'hideMobildeMenu'}
            >
              <IconWrapper
                onClick={() => {
                  setMobileMenu(!isMobileMenu);
                  router.push('/about');
                }}
              >
                <Font fontSize="3.2rem" pointer="pointer" fontWeight={700}>
                  ABOUT
                </Font>
              </IconWrapper>
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
  visibility: ${props => (props.scrollEventState ? 'hidden' : 'visible')};
  opacity: ${props => (props.scrollEventState ? 0 : 1)};
  transition: all 0.2s;
`;

const NavigationFrame = styled.header`
  background: #fff;
  border-bottom: 0.15rem solid #000;
  position: absolute;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 160rem;
  margin: 0 auto;
  padding: 1.5rem 6rem;

  @media screen and (max-width: 500px) {
    padding: 2.4rem 1.5rem 2.4rem 1.5rem;
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
  gap: 3rem;

  margin-top: 8rem;
  padding-top: 2rem;
  padding-left: 2rem;

  &.showMobildeMenu {
    visibility: visible;
    opacity: 1;
  }

  &.hideMobildeMenu {
    opacity: 0;
  }
`;

const CustomImage = styled(Image)`
  cursor: pointer;
  z-index: 3;
`;

const CustomImageWrapper = styled.div`
  position: relative;
  width: 8.8rem;
  height: 5.1rem;
`;

const ToggleImageWrapper = styled.div`
  position: relative;
  width: ${props => (props.width ? props.width : '3rem')};
  height: ${props => (props.height ? props.height : '3rem')};
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const CustomLi = styled.li`
  cursor: pointer;
  font-size: ${props => (props.fontSize ? props.fontSize : '1.6rem')};
  line-height: ${props => (props.lineHeight ? props.lineHeight : '')};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : 400)};
  margin: ${props => (props.margin ? props.margin : '')};
  cursor: ${props => (props.pointer ? props.pointer : '')};
`;
