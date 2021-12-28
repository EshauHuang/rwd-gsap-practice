import styled from "styled-components";
import { useRef, useLayoutEffect, useCallback } from "react";

import FadeIn from "./FadeIn";
import { Menu as MenuIcon } from "@styled-icons/ionicons-solid";

import { devices } from "../devices";
import { accordion } from "../animate";

const SiteName = styled.div`
  font-weight: bold;
  color: ${(props) => props.theme.color.primary};
  font-size: ${(props) => props.theme.fontSize.h4};
  display: flex;
  align-items: center;
`;

const FirstBlock = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Menu = styled.ul`
  display: flex;
`;

const Link = styled.a`
  font-size: ${(props) => props.theme.fontSize.h4};
  color: black;
  & + & {
    margin-left: 35px;
  }
`;

const StyledMenuIcon = styled(MenuIcon)`
  width: 40px;
  display: none;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 34px 0px;
  @media ${devices.tablet} {
    flex-direction: column;
    ${Menu} {
      flex-direction: column;
      width: 100%;
      background: #878787;
      height: auto;
      overflow: hidden;
    }
    ${Link} {
      width: 100%;
      padding: 10px 0px;
      text-align: center;
      margin: 0;
      color: white;
      font-size: ${(props) => props.theme.fontSize.h5};
      :hover {
        background: #444;
      }
      &:not(:last-child) {
        border-bottom: solid 1px ${(props) => props.theme.color.light};
      }
    }
    ${StyledMenuIcon} {
      display: inline-block;
    }
  }

  @media ${devices.mobileL} {
    padding: 20px 5px;
    ${StyledMenuIcon} {
      width: 30px;
    }
  }
}
`;

const LinkData = ["Home", "Project", "About", "Contact"];

const Navbar = () => {
  const fadeIn = useRef();
  const listRef = useRef();
  const accordionMenu = useRef();

  useLayoutEffect(() => {
    if (window.innerWidth <= 768) {
      accordionMenu.current = accordion(listRef.current);
    }
  }, []);

  const toggle = useCallback(() => {
    accordionMenu.current.paused(false);
    accordionMenu.current.reversed(!accordionMenu.current.reversed());
  }, []);

  return (
    <FadeIn ref={fadeIn}>
      <Container>
        <FirstBlock>
          <SiteName>我的網站</SiteName>
          <StyledMenuIcon onClick={toggle} />
        </FirstBlock>
        <Menu ref={listRef}>
          {LinkData.map((name, index) => (
            <Link key={index} href="#">
              {name}
            </Link>
          ))}
        </Menu>
      </Container>
    </FadeIn>
  );
};

export default Navbar;
