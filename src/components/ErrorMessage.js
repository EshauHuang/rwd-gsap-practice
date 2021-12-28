import styled from "styled-components";

const ErrorMessage = styled.div`
  font-size: ${(props) => props.theme.fontSize.h5};
  height: ${(props) => props.theme.fontSize.h5};
  color: red;
`;

export default ErrorMessage;
