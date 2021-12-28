import { gsap } from "gsap";
import styled from "styled-components";
import { useRef, useEffect, useCallback } from "react";

import useScroll from "../hooks/useScroll";
import { devices } from "../devices";

const DigitalList = styled.ul`
  box-sizing: border-box;
  width: 100%;
  max-width: 50%;
  padding: 50px 0px;
  display: flex;
  flex-wrap: wrap;
  border-top: 3px solid #f0f0f5;
  border-bottom: 3px solid #f0f0f5;
`;

const DigitalItem = styled.li`
  flex-grow: 1;
  text-align: center;
`;

const DigitalValue = styled.div`
  font-size: ${(props) => props.theme.fontSize.h1};
  font-weight: bold;
  text-shadow: 2px 0px;
  :after {
    content: "+";
  }
`;

const DigitalName = styled.div`
  font-size: ${(props) => props.theme.fontSize.h5};
  color: ${(props) => props.theme.color.light};
  margin-top: 10px;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 0;
  width: 100%;
  margin-top: 100px;

  @media ${devices.laptop} {
    ${DigitalList} {
      max-width: 100%;
      :nth-child(2) {
        border-top: 0;
      }
    }
    @media ${devices.mobileL} {
      ${DigitalItem} {
        min-width: 51%;
        :first-child {
          padding-bottom: 50px;
        }
        :last-child {
          padding-top: 50px;
          border-top: 3px solid #f0f0f5;
        }
      }
    }
  }
`;
const DigitalData = [
  [
    {
      name: "Project Completed",
      value: "50",
    },
    {
      name: "Github Repository",
      value: "45",
    },
  ],
  [
    {
      name: "Years of Experience",
      value: "50",
    },
    {
      name: "Youtube Subscribers",
      value: "700",
    },
  ],
];

const DigitalBlock = () => {
  const DigitalValueRef = useRef([]);
  const [scroll, setScroll] = useScroll();
  const animation = useRef();
  const blockRef = useRef();
  useEffect(() => {
    animation.current = gsap.from(DigitalValueRef.current, {
      duration: 2,
      textContent: 0,
      snap: { textContent: 1 },
      stagger: 0.2,
      paused: true,
      ease: "Power1.easeIn",
    });
  }, []);

  const isElementInViewport = useCallback((el) => {
    const windowTopYAxis = window.pageYOffset;
    const windowBottomYAxis = window.pageYOffset + window.innerHeight;
    const elTop = el.offsetTop;
    const elBottom = elTop + el.offsetHeight;
    return windowBottomYAxis - 100 >= elTop && windowTopYAxis <= elBottom;
  }, []);

  useEffect(() => {
    if (isElementInViewport(blockRef.current.firstChild)) {
      animation.current.paused(false);
      animation.current.play();
    }
  }, [scroll, isElementInViewport]);
  return (
    <Container ref={blockRef}>
      {DigitalData.map((list, index) => (
        <DigitalList key={index}>
          {list.map((data, index) => (
            <DigitalItem key={index}>
              <DigitalValue
                ref={(element) => DigitalValueRef.current.push(element)}
              >
                {data.value}
              </DigitalValue>
              <DigitalName>{data.name}</DigitalName>
            </DigitalItem>
          ))}
        </DigitalList>
      ))}
    </Container>
  );
};

export default DigitalBlock;
