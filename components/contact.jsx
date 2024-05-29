import styled from 'styled-components';

const Contact = () => {
  return (
    <Frame>
      <ImageWrapper>logo</ImageWrapper>
      <ImageWrapper>logo</ImageWrapper>
      <ImageWrapper>logo</ImageWrapper>
      <ImageWrapper>logo</ImageWrapper>
      <ImageWrapper>logo</ImageWrapper>
    </Frame>
  );
};

export default Contact;

const Frame = styled.div`
  position: fixed;
  right: 5rem;
  bottom: 5rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ImageWrapper = styled.div`
  width: 3rem;
  height: 3rem;
  padding: 2rem;
  border: 1px solid red;
`;
