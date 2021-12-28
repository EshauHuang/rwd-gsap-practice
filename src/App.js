import { gsap } from "gsap";
import WebFont from "webfontloader";
import styled from "styled-components";
import { useEffect, useState, useRef } from "react";

import GlobalStyle from "./globalStyle";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import SkillBlock from "./components/SkillBlock";
import ContactBlock from "./components/ContactBlock";
import DigitalBlock from "./components/DigitalBlock";

import { devices } from "./devices";

const Container = styled.div`
  padding: 0px 75px;
  @media ${devices.mobileL} {
    padding: 0;
  }
`;

const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: black;
`;

const Circle = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: white;
  margin: 20px;
  @media ${devices.mobileL} {
    width: 30px;
    height: 30px;
    margin: 10px;
  }
`;

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const circles = Array.from(Array(5).keys());
  const circleRef = useRef([]);
  circleRef.current = [];
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Poppins"],
      },
    });

    if (circleRef.current.length > 0) {
      gsap
        .timeline({ repeat: -1, repeatDelay: 0.5 })
        .from(circleRef.current, {
          y: -225,
          opacity: 0,
          duration: 2,
          stagger: 0.2,
          ease: "Elastic.easeOut",
        })
        .to(circleRef.current, {
          opacity: 0,
          duration: 0.5,
          stagger: 0.2,
        });
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading>
          {circles.map((index) => (
            <Circle key={index} ref={(el) => circleRef.current.push(el)} />
          ))}
        </Loading>
      ) : (
        <>
          <Container>
            <GlobalStyle />
            <Navbar />
            <Header />
            <DigitalBlock />
          </Container>
          <AboutMe />
          <SkillBlock />
          <ContactBlock />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
