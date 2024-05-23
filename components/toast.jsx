import { useRecoilState } from "recoil";
import { toastStateAtom } from "atoms/index";
import styled from "styled-components";
import Font from "./font";
import { useEffect } from "react";

const Toast = () => {
  const [toastState, setToastState] = useRecoilState(toastStateAtom);

  useEffect(() => {
    const handler = setTimeout(() => {
      setToastState((prev) => {
        return {
          ...prev,
          isOpen: false,
        };
      });
    }, 3000);

    return () => {
      clearTimeout(handler);
    };
  }, [toastState]);

  return (
    <Frame active={toastState.isOpen}>
      <Font size={16} color="#fff">
        {toastState.value}
      </Font>
    </Frame>
  );
};

export default Toast;

const Frame = styled.div`
  visibility: ${(props) => (props.active ? "visible" : "hidden")};
  bottom: ${(props) => (props.active ? "12rem" : "-10rem")};
  transition: all 0.3s;
  /* opacity: ${(props) => (props.active ? 1 : 0)}; */

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  left: 0;
  right: 0;
  width: max-content;
  padding: 3rem 5rem;
  margin: 0 auto;

  background-color: #000;
  border-radius: 10px;
`;
