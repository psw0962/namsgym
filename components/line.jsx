import styled from "styled-components";

const Line = ({ margin, width, border }) => {
  return <LineComp margin={margin} width={width} border={border} />;
};

const LineComp = styled.div`
  width: ${(props) => (props.width ? props.width : "100%")};
  margin: ${(props) => props.margin && props.margin};
  border: ${(props) => (props.border ? props.border : "1px solid #000")};
`;

export default Line;
