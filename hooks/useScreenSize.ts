import { useState, useEffect } from "react";

const useScreenSize = () => {
  const [screenWidth, setScreenWidth] = useState(0);

  const handleWindowWidthResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    handleWindowWidthResize();
    window.addEventListener("resize", handleWindowWidthResize);
    return () => window.removeEventListener("resize", handleWindowWidthResize);
  }, []);

  return screenWidth;
};

export default useScreenSize;
