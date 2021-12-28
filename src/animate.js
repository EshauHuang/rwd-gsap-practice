import { gsap } from "gsap";

export const fadeIn = (element, vars) => {
  gsap.from(element, {
    opacity: 0,
    duration: 1.5,
    x: 0,
    ease: "power0",
    ...vars,
  });
};

export const fadeOut = (element, vars) => {
  gsap.to(element, {
    opacity: 0,
    ...vars,
  });
};

export const accordion = (element) =>
  gsap.from(element, {
    height: 0,
    ease: "power0",
    paused: true,
    reversed: true,
  });
