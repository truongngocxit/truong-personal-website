import css from "./SkillItem.module.scss";
import { cloneElement, useEffect, useState } from "react";

const SkillItem = function ({ className, children, percent, label }) {
  const [currentPercent, setCurrentPercent] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentPercent < percent) {
        setCurrentPercent((pc) => pc + 1);
      } else {
        clearInterval(intervalId);
      }
    }, 1);

    return () => clearInterval(intervalId);
  }, [currentPercent, percent]);

  return (
    <div className={`${css["skill"]} ${className || ""}`}>
      {cloneElement(children, { className: css["skill__icon"] })}
      <span className={css["skill__label"]}>{label}</span>
      <div className={css["skill__experience"]}>
        <span className={css["skill__experience-label"]}>{percent}%</span>
        <div
          className={css["skill__experience-bar"]}
          style={{ width: `${currentPercent}%` }}
        />
      </div>
    </div>
  );
};

export default SkillItem;
