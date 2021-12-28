import { gsap } from "gsap";
import styled from "styled-components";
import { useRef, useEffect, useCallback } from "react";

import useScroll from "../hooks/useScroll";
import mockup from "../mockup.png";
import { devices } from "../devices";

const Desc = styled.div`
  max-width: 70%;
  min-width: 70%;
`;

const Strip = styled.div`
  background: ${(props) => props.theme.color.primary};
  width: 175px;
  height: 20px;
`;

const Title = styled.div`
  position: relative;
  font-size: ${(props) => props.theme.fontSize.h1};
  color: white;
  text-shadow: 2px;
  font-weight: bold;
  margin-top: 10px;
`;

const Detail = styled.div`
  font-size: ${(props) => props.theme.fontSize.h5};
  color: white;
  line-height: 2.5rem;
  margin-top: 20px;
`;

const GitUrl = styled.div`
  color: ${(props) => props.theme.color.primary};
  font-size: ${(props) => props.theme.fontSize.h5};
  margin-top: 10px;
`;

const Image = styled.img`
  transform: scale(0.8);
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 30px 75px;
  width: 100%;
  background: #0f1221;
  margin-top: 180px;
  @media ${devices.tablet} {
    padding: 30px 30px;
    padding-top: 75px;
    flex-direction: column;
    ${Desc} {
      max-width: 100%;
    }
    ${Title}, ${Detail}, ${GitUrl} {
      text-align: center;
    }
    ${Strip} {
      width: 185px;
      margin: 0 auto;
    }
    ${Image} {
      width: 40%;
    }
  }
  @media ${devices.mobileM} {
    ${Strip} {
      width: 145px;
    }
    ${Image} {
      width: 60%;
    }
  }
`;

const DetailData = [
  "Hello, My name is Felix.",
  "I am a CSE Undergraduate at Parul University.",
  "I'm currently learning UI/UX development.",
  "Checkout my projects on github",
];

const AboutMe = () => {
  const detailTextRef = useRef([]);
  const [scroll, setScroll] = useScroll();
  detailTextRef.current = [];
  const animation = useRef();
  const stripRef = useRef();
  const imageRef = useRef();
  const blockRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({ paused: true });
    animation.current = tl
      .from(stripRef.current, {
        width: 0,
        duration: 6,
      })
      .from(
        imageRef.current,
        {
          x: 40,
          opacity: 0,
          duration: 1.5,
          ease: "power0",
        },
        "<"
      )
      .from(
        detailTextRef.current,
        {
          x: 40,
          opacity: 0,
          duration: 1.5,
          ease: "power0",
          stagger: 1,
        },
        "-1"
      );
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
      <Desc>
        <Strip ref={stripRef} />
        <Title ref={(el) => detailTextRef.current.push(el)}>
          A Bit About Me...
        </Title>
        <Detail>
          {DetailData.map((text, index) => (
            <p key={index} ref={(el) => detailTextRef.current.push(el)}>
              {text}
            </p>
          ))}
        </Detail>
        <GitUrl ref={(el) => detailTextRef.current.push(el)}>
          @FelixHuang-git
        </GitUrl>
      </Desc>
      <Image ref={imageRef} src={mockup} />
    </Container>
  );
};

export default AboutMe;
