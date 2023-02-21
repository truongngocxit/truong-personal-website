import css from "./SkillItem.module.scss";
import ReactIcon from "../../UI/SVG/ReactIcon";
import { cloneElement } from "react";

const SkillItem = function ({ className, children, percent, label }) {
  return (
    <div className={`${css["skill"]} ${className || ""}`}>
      {cloneElement(children, { className: css["skill__icon"] })}
      <span className={css["skill__label"]}>{label}</span>
      <div className={css["skill__experience"]}>
        <div
          className={css["skill__experience-bar"]}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
};

export default SkillItem;
