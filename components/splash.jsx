import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import logo from '@/public/logo.svg';
import ImageComponent from '@/components/image-component';

const Splash = ({ setIsSplash }) => {
  useEffect(() => {
    const splashTimeout = setTimeout(() => {
      setIsSplash(false);
    }, 1000);

    window.sessionStorage.setItem('splash', true);

    return () => {
      clearTimeout(splashTimeout);
    };
  }, []);

  return (
    <React.Fragment>
      {!window.sessionStorage.getItem('splash') && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Frame>
            <ImageComponent width={18} height={20} $src={logo} $alt="logo" />
          </Frame>
        </motion.div>
      )}
    </React.Fragment>
  );
};

export default Splash;

const Frame = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 100;
  background-color: #fff;
`;
