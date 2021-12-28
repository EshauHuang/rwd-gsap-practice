import { useState, useEffect } from "react";

const useScroll = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.pageYOffset);
    });
  }, []);
  return [scroll, setScroll];
};

export default useScroll;
