import styled from "styled-components";
import ErrorMessage from "./ErrorMessage";

const Container = styled.div`
  padding-top: 5px;
`;

const Input = styled.input`
  box-sizing: border-box;
  border: 0;
  padding: 0px 8px;
  height: 54px;
  font-size: ${(props) => props.theme.fontSize.h5};
  width: 100%;
  background: rgba(255, 255, 255, 0.4);
`;

const Title = styled.div`
  font-size: ${(props) => props.theme.fontSize.h4};
  color: white;
`;

const InputBlock = ({
  title,
  name,
  type,
  error,
  inputValue,
  handleChangeValue,
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Input
        type={type}
        name={name}
        value={inputValue[name]}
        onChange={handleChangeValue}
      />
      <ErrorMessage>{error[name]}</ErrorMessage>
    </Container>
  );
};

export default InputBlock;
