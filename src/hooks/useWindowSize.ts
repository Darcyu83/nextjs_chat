import { useEffect, useState } from "react";

const useWindowSize = (number?: number) => {
  const [windowSize, setWindowSize] = useState<{
    width?: number;
    height?: number;
  }>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side

    function handleResize() {
      // console.log(
      //   "window.innerWidth ====",
      //   window.innerWidth,
      //   "window.innerHeight ====",
      //   window.innerHeight
      // );
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }

    // handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
};

export default useWindowSize;
