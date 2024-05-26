import styled from 'styled-components';
import Font from './font';
import ImageComponent from './image-component';

const SubTitle = ({ content, $margin }) => {
  return (
    <LogoWrapper $margin={$margin}>
      <ImageComponent
        width={4}
        height={4}
        $cursor="pointer"
        $src="/logo.svg"
        $alt="logo"
      />

      <Font $fontSize="2.5rem" $fontWeight="700" $whiteSpace="pre-wrap">
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
  margin: ${props => (props.$margin ? props.$margin : '0 0 3rem 0')};
`;
