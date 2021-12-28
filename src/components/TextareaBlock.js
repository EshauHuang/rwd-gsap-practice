import styled from "styled-components";
import ErrorMessage from "./ErrorMessage";

const Container = styled.div`
  padding-top: 5px;
`;

const TextArea = styled.textarea`
  box-sizing: border-box;
  border: 0;
  padding: 8px;
  font-size: ${(props) => props.theme.fontSize.h5};
  width: 100%;
  background: rgba(255, 255, 255, 0.4);
  resize: none;
`;

const Title = styled.div`
  font-size: ${(props) => props.theme.fontSize.h4};
  color: white;
`;

const TextareaBlock = ({
  title,
  name,
  rows,
  error,
  inputValue,
  handleChangeValue,
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <TextArea
        name={name}
        rows={rows}
        value={inputValue.message}
        onChange={handleChangeValue}
      />
      <ErrorMessage>{error[name]}</ErrorMessage>
    </Container>
  );
};

export default TextareaBlock;
