import { gsap } from "gsap";
import styled from "styled-components";
import { useRef, useEffect, useCallback } from "react";

import useScroll from "../hooks/useScroll";
import { devices } from "../devices";

const Title = styled.div`
  font-weight: 800;
  text-shadow: 2px 0px;
  font-size: ${(props) => props.theme.fontSize.h2};
  color: ${(props) => props.theme.color.primary};
`;

const SkillListOne = styled.div`
  padding: 0px 60px;
`;
const SkillListTwo = styled.div`
  display: none;
`;

const SkillRow = styled.ul`
  display: flex;
  box-sizing: border-box;
  font-size: ${(props) => props.theme.fontSize.h5};
  margin-top: 30px;
`;

const SkillName = styled.li`
  flex: 1;
  white-space: nowrap;
  min-width: 25%;
`;

const Container = styled.div`
  box-sizing: border-box;
  padding: 80px;
  @media ${devices.tablet} {
    padding: 20px 40px;
    ${SkillListOne} {
      padding: 0;
    }
    ${Title} {
      text-align: center;
    }
  }
  @media ${devices.mobileL} {
    padding-left: 50px;
    ${SkillListOne} {
      display: none;
    }
    ${SkillListTwo} {
      display: block;
    }
  }
`;

const SkillDataOne = [
  ["HTML", "PHP", "SQL", "Python"],
  ["CSS", "SCSS", "C/C++", "Responsive Design"],
  ["JavaScript", "Typescript", "Node Js", "UI/UX Design"],
];

const SkillDataTwo = [
  ["HTML", "PHP", "CSS"],
  ["SQL", "C/C++", "TypeScript"],
  ["Node Js", "Python", "JavaScript"],
  ["SCSS", "UI/UX Design", "Responsive Design"],
];

const SkillBlock = () => {
  const [scroll, setScroll] = useScroll();
  const animation = useRef();
  const skillRef = useRef([]);
  const blockRef = useRef();
  skillRef.current = [];

  useEffect(() => {
    animation.current = gsap.from(skillRef.current, {
      duration: 1,
      scale: 0,
      y: 40,
      ease: "power1.inOut",
      paused: true,
      stagger: {
        from: "end",
        amount: 1.5,
      },
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
    if (isElementInViewport(blockRef.current)) {
      animation.current.paused(false);
      animation.current.play();
    }
  }, [scroll, isElementInViewport]);

  return (
    <Container ref={blockRef}>
      <Title>Skills</Title>
      <SkillListOne>
        {SkillDataOne.map((elements, index) => (
          <SkillRow key={index}>
            {elements.map((name, index) => (
              <SkillName key={index} ref={(el) => skillRef.current.push(el)}>
                {name}
              </SkillName>
            ))}
          </SkillRow>
        ))}
      </SkillListOne>
      <SkillListTwo>
        {SkillDataTwo.map((elements, index) => (
          <SkillRow key={index}>
            {elements.map((name, index) => (
              <SkillName key={index} ref={(el) => skillRef.current.push(el)}>
                {name}
              </SkillName>
            ))}
          </SkillRow>
        ))}
      </SkillListTwo>
    </Container>
  );
};

export default SkillBlock;
