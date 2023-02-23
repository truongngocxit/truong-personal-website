import css from "./LoadingBar.module.scss";
import { useEffect, useState } from "react";

const LoadingBar = function ({ className }) {
  const [barXPos, setBarXPos] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBarXPos((x) => {
        if (x >= 150) return 0;
        return x + 10;
      });
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={`${css["loading-bar"]} ${className}`}>
      <div
        className={css["loading-bar__progress"]}
        style={{
          left: `${barXPos}%`,
        }}
      />
    </div>
  );
};

export default LoadingBar;
