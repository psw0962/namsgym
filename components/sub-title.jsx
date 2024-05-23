import styled from 'styled-components';
import Font from './font';
import ImageComponent from './image-component';

const SubTitle = ({ content }) => {
  return (
    <LogoWrapper>
      <ImageComponent
        width={4}
        height={4}
        $cursor="pointer"
        $src="/logo.svg"
        $alt="logo"
        onClick={() => router.push('/')}
      />

      <Font fontSize="2.5rem" fontWeight="700">
        {content}
      </Font>
    </LogoWrapper>
  );
};

export default SubTitle;

const LogoWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  height: 100%;
  margin-bottom: 3rem;
`;
