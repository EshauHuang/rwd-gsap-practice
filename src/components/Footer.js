import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.color.secondary};
  font-size: ${(props) => props.theme.fontSize.h5};
`;

const Footer = () => {
  return <Container>@FelixHuang_dev</Container>;
};

export default Footer;
