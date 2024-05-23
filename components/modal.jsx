import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import useOnClickOutside from 'hooks/useOnClickOutside';
import ImageComponent from './image-component';
import close from '@/public/svg/close.svg';

const Modal = ({ state, setState, isOverflow, children }) => {
  const moodalOpenInRef = useRef();
  const modalOpenExceptRef = useRef();
  useOnClickOutside({
    inRef: moodalOpenInRef,
    exceptRef: modalOpenExceptRef,
    handler: () => {
      setState('');
    },
  });

  useEffect(() => {
    if (state) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'unset';
    }
  }, [state]);

  return (
    <Frame className={state ? 'slideUp' : 'slideDown'}>
      <DialogFrame
        ref={moodalOpenInRef}
        className={state ? 'slideUp' : 'slideDown'}
        isOverflow={isOverflow}
      >
        <DialogWrapper>
          <ImageComponent
            width={3}
            height={3}
            $cursor="pointer"
            $src={close}
            $alt="close"
            onClick={() => {
              setState(false);
            }}
          />
        </DialogWrapper>

        <div>{children}</div>
      </DialogFrame>
    </Frame>
  );
};

export default Modal;

const Frame = styled.div`
  display: flex;
  justify-content: center;
  visibility: hidden;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 10;
  transition: all 0.2s ease-in-out;

  &.slideUp {
    visibility: visible;
    opacity: 1;
  }

  &.slideDown {
    opacity: 0;
  }
`;

const DialogFrame = styled.div`
  display: flex;
  flex-direction: column;

  visibility: hidden;
  position: absolute;
  bottom: -300px;
  width: 100%;
  max-width: 600px;
  max-height: 70rem;
  min-height: 10rem;
  padding: 8rem 5rem 16rem 5rem;
  border-radius: 18px 18px 0px 0px;
  background-color: #fff;
  transition: all 0.2s ease-in-out;
  box-sizing: border-box;
  z-index: 10;
  overflow-x: ${props => (props.isOverflow ? 'auto' : '')};
  overflow-y: auto;

  &.slideUp {
    visibility: visible;
    opacity: 1;
    bottom: 0px;
  }

  &.slideDown {
    opacity: 0;
  }
`;

const DialogWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
