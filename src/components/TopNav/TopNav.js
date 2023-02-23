import css from "./TopNav.module.scss";
import MainLogo from "../UI/MainLogo/MainLogo";
import ToolTip from "../Tooltip/ToolTip";
import { forwardRef } from "react";

const TopNav = function (
  { className = "", onOpenProjects, onOpenSkills, onOpenContacts, onOpenCV },
  ref
) {
  return (
    <nav className={`${css["top-nav"]} ${className}`} ref={ref}>
      <MainLogo isHorizontal={true} className={css["top-nav__logo"]} />
      <ul className={css["top-nav__links"]}>
        <ToolTip message={"View my CV"}>
          <li className={css["top-nav__link"]} onClick={onOpenCV}>
            MY CV
          </li>
        </ToolTip>
        <ToolTip message={"View my front-end skills & more"}>
          <li className={css["top-nav__link"]} onClick={onOpenSkills}>
            MY SKILLS
          </li>
        </ToolTip>
        <ToolTip message={"View my recent projects"}>
          <li className={css["top-nav__link"]} onClick={onOpenProjects}>
            PROJECTS
          </li>
        </ToolTip>
        <ToolTip message={"View my contact details"}>
          <li className={css["top-nav__link"]} onClick={onOpenContacts}>
            CONTACTS
          </li>
        </ToolTip>
      </ul>
    </nav>
  );
};

export default forwardRef(TopNav);
