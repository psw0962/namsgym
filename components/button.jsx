import styled from 'styled-components';

const Button = ({
  $margin,
  width,
  $fontSize,
  border,
  padding,
  $borderRadius,
  $backgroundColor,
  color,
  $lineHeight,
  onClick,
  children,
}) => {
  return (
    <ButtonComp
      $margin={$margin}
      $fontSize={$fontSize}
      $borderRadius={$borderRadius}
      $backgroundColor={$backgroundColor}
      $lineHeight={$lineHeight}
      width={width}
      border={border}
      padding={padding}
      color={color}
      onClick={onClick}
    >
      {children}
    </ButtonComp>
  );
};

const ButtonComp = styled.button`
  font-size: ${props => (props.$fontSize ? props.$fontSize : '1.6rem')};
  width: ${props => (props.width ? props.width : '100%')};
  margin: ${props => props.$margin && props.$margin};
  border: ${props => (props.border ? props.border : 'none')};
  border-radius: ${props =>
    props.$borderRadius ? props.$borderRadius : '5px'};
  padding: ${props => (props.padding ? props.padding : '1rem')};
  background-color: ${props =>
    props.$backgroundColor ? props.$backgroundColor : '#fff'};
  color: ${props => (props.color ? props.color : '#000')};
  line-height: ${props => (props.$lineHeight ? props.$lineHeight : 1.2)};
  cursor: pointer;
`;

export default Button;
