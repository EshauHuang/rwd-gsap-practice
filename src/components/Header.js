import { useRef } from "react";
import styled from "styled-components";

import FadeIn from "./FadeIn";
import laptop from "../laptop.png";
import { devices } from "../devices";

const Desc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  margin-right: 20px;
`;

const Title = styled.div`
  font-weight: 900;
  text-shadow: 2px 0px 2px;
  font-size: 3.5rem;
  letter-spacing: 3px;
  span {
    color: ${(props) => props.theme.color.primary};
  }
`;

const Job = styled.div`
  font-size: ${(props) => props.theme.fontSize.h3};
  font-weight: bold;
  margin-top: 10px;
  color: ${(props) => props.theme.color.secondary};
`;

const ButtonBlock = styled.div`
  display: flex;
  margin-top: 50px;
  > span + span {
    margin-left: 23px;
  }
`;

const Button = styled.button`
  box-sizing: border-box;
  width: 185px;
  height: 50px;
  font-weight: bold;
  box-shadow: -6px 6px 6px ${(props) => props.theme.color.light};
  font-size: ${(props) => props.theme.fontSize.h5};
  background: ${(props) => props.bgColor};
  color: ${(props) => props.fontColor};
`;

const Image = styled.img``;

const Intro = styled.div`
  font-size: ${(props) => props.theme.fontSize.h5};
  font-weight: bold;
  margin-top: 10px;
  text-align: center;
  display: none;
  line-height: 2.5rem;
`;

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 70px 80px;
  background: #f0f0f5;
  @media ${devices.laptop} {
    flex-direction: column;
    align-items: center;
    text-align: center;
    ${Desc} {
      align-items: center;
      margin-right: 0px;
    }
    ${ButtonBlock} {
      flex-direction: column;
      margin-top: 0;
      > span {
        margin-left: 0;
        margin-top: 15px;
      }
    }

    ${Image} {
      width: 60%;
      margin-top: 20px;
    }
    ${Intro} {
      display: inline-block;
    }
  }
  @media ${devices.tablet} {
    padding: 70px 42px;
  }
  @media ${devices.mobileL} {
    padding: 70px 32px;
  }
`;

const Header = () => {
  const fadeIn = useRef();

  return (
    <Container>
      <Desc>
        <FadeIn
          ref={fadeIn}
          vars={{
            y: -20,
            delay: 0.5,
          }}
        >
          <Title>
            <div>Hello,</div>
            <div>
              I am <span>Felix</span>
            </div>
          </Title>
        </FadeIn>
        <FadeIn
          ref={fadeIn}
          vars={{
            x: -20,
            delay: 1,
          }}
        >
          <Job>Web Designer/Developer</Job>
        </FadeIn>
        <FadeIn
          ref={fadeIn}
          vars={{
            x: 20,
            delay: 1.5,
          }}
        >
          <Intro>
            I specialize in UI Design, Responsive Web Design,
            <br />
            and Web development.
          </Intro>
        </FadeIn>
        <ButtonBlock>
          <FadeIn
            ref={fadeIn}
            vars={{
              y: 20,
              delay: 2,
            }}
          >
            <Button bgColor="white" fontColor="#999">
              Contact
            </Button>
          </FadeIn>
          <FadeIn
            ref={fadeIn}
            vars={{
              y: 20,
              delay: 2.5,
              duration: 1,
            }}
          >
            <Button bgColor="#5e3aee" fontColor="white">
              Project
            </Button>
          </FadeIn>
        </ButtonBlock>
      </Desc>
      <FadeIn
        ref={fadeIn}
        vars={{
          delay: 3,
          duration: 2,
        }}
      >
        <Image src={laptop} />
      </FadeIn>
    </Container>
  );
};

export default Header;
