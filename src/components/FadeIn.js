import { forwardRef, useLayoutEffect, useRef, useEffect } from "react";

import { fadeIn } from "../animate";

const FadeIn = ({ children, vars }, ref) => {
  const el = useRef();
  const animation = useRef();

  useLayoutEffect(() => {
    animation.current = fadeIn(el.current.children, vars);
  });

  useEffect(() => {
    if (typeof ref === "function") {
      ref(animation.current);
    } else if (ref) {
      ref.current = animation.current;
    }
  });

  return <span ref={el}>{children}</span>;
};

export default forwardRef(FadeIn);
