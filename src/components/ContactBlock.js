import { gsap } from "gsap";
import styled from "styled-components";
import { useState, useEffect, useRef, useCallback } from "react";

import InputBlock from "./InputBlock";
import TextareaBlock from "./TextareaBlock";

import useScroll from "../hooks/useScroll";
import plane from "../plane.png";
import { devices } from "../devices";

const Desc = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 100%;
  opacity: 1;
`;

const Form = styled.form`
  width: 50%;
  height: 100%;
  color: ${(props) => props.theme.color.primary};
  opacity: 1;
`;

const Title = styled.div`
  font-size: ${(props) => props.theme.fontSize.h1};
  font-weight: bold;
  text-shadow: 2px 0px;
  color: white;
`;

const Intro = styled.div`
  font-size: ${(props) => props.theme.fontSize.h5};
  color: white;
  line-height: 2rem;
  margin-top: 40px;
`;

const Image = styled.img`
  margin-top: 40px;
  width: 100%;
`;

const Button = styled.button`
  width: 100%;
  height: 50px;
  font-size: ${(props) => props.theme.fontSize.h5};
  font-weight: bold;
  background: white;
  color: black;
  margin-top: 15px;
`;

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 40px;
  width: 100%;
  background: ${(props) => props.theme.color.primary};
  margin-top: 20px;
  @media ${devices.tablet} {
    padding: 40px 100px;
    flex-direction: column;
    ${Desc} {
      width: 100%;
      align-items: center;
    }
    ${Form} {
      width: 100%;
    }
    ${Intro} {
      display: none;
    }
  }
  @media ${devices.mobileL} {
    padding: 40px 60px;
  }
`;

const inputData = [
  {
    title: "Name",
    name: "nickname",
    type: "text",
  },
  {
    title: "Email",
    name: "email",
    type: "text",
  },
];

const initialInputValue = {
  nickname: "",
  email: "",
  message: "",
};

const initialError = {
  nickname: "",
  email: "",
  message: "",
};

const ContactBlock = () => {
  const [inputValue, setInputValue] = useState(() => initialInputValue);
  const [scroll, setScroll] = useScroll();
  const [error, setError] = useState(() => initialError);
  const descRef = useRef();
  const formRef = useRef();
  const animation = useRef();
  const blockRef = useRef();

  const checkEmail = (email) => {
    return email.match(/^[a-z0-9]+([+.][a-z0-9]+)*[a-z0-9]*@[a-z]+\.[a-z]+/);
  };

  const handleChangeValue = (e) => {
    const { name, value } = e.target;
    setInputValue((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errorData = {};
    Object.keys(inputValue).map(
      (key) => (errorData[key] = inputValue[key] ? "" : "此欄位不可空白")
    );
    if (!errorData.email) {
      errorData.email =
        !checkEmail(inputValue.email) && "Email 格式錯誤，請重新輸入";
    }
    setError(errorData);
  };

  useEffect(() => {
    const tl = gsap.timeline({ paused: true });
    animation.current = tl
      .from(descRef.current, {
        x: -20,
        opacity: 0,
        duration: 3,
      })
      .from(
        formRef.current,
        {
          x: 20,
          opacity: 0,
          duration: 3,
        },
        "<"
      );
    return () => {
      setError(() => initialError);
      setInputValue(() => initialInputValue);
    };
  }, []);

  const isElementInViewport = useCallback((el) => {
    const windowTopYAxis = window.pageYOffset;
    const windowBottomYAxis = window.pageYOffset + window.innerHeight;
    const elTop = el.offsetTop;
    const elBottom = elTop + el.offsetHeight;
    return windowBottomYAxis - 100 >= elTop && windowTopYAxis <= elBottom;
  }, []);

  useEffect(() => {
    if (isElementInViewport(blockRef.current)) {
      animation.current.paused(false);
      animation.current.play();
    }
  }, [scroll, isElementInViewport]);

  return (
    <Container ref={blockRef}>
      <Desc ref={descRef}>
        <Title>Contact</Title>
        <Intro>
          Want a website for your brand and business?
          <br />I design what you desire....
        </Intro>
        <Image src={plane} />
      </Desc>
      <Form onSubmit={handleSubmit} ref={formRef}>
        {inputData.map((data, index) => (
          <InputBlock
            key={index}
            {...data}
            error={error}
            inputValue={inputValue}
            handleChangeValue={handleChangeValue}
          />
        ))}
        <TextareaBlock
          title="Message"
          name="message"
          rows="5"
          error={error}
          inputValue={inputValue}
          handleChangeValue={handleChangeValue}
        />
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
};

export default ContactBlock;
