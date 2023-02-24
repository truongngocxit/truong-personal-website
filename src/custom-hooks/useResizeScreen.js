import { useRef, useEffect, useState } from "react";

const useResizeScreen = function () {
  const [screenType, setScreenType] = useState("");
  const resizeObserverRef = useRef(null);

  useEffect(() => {
    resizeObserverRef.current = new ResizeObserver(function (entries) {
      const docEl = entries[0];
      if (docEl.contentRect.width <= 768) {
        setScreenType("tablet");
      } else {
        setScreenType("laptop");
      }
    });

    resizeObserverRef.current.observe(document.documentElement);

    return () => resizeObserverRef.current.disconnect();
  }, []);

  return {
    screenType,
  };
};

export default useResizeScreen;
