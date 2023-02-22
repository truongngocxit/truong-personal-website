import css from "./TopNav.module.scss";
import MainLogo from "../UI/MainLogo/MainLogo";
import { useRef, useLayoutEffect } from "react";

const TopNav = function ({
  className = "",
  onOpenProjects,
  onOpenSkills,
  onOpenContacts,
}) {
  return (
    <nav className={`${css["top-nav"]} ${className}`}>
      <MainLogo isHorizontal={true} className={css["top-nav__logo"]} />
      <ul className={css["top-nav__links"]}>
        <li className={css["top-nav__link"]}>ABOUT</li>
        <li className={css["top-nav__link"]} onClick={onOpenSkills}>
          MY SKILLS
        </li>
        <li className={css["top-nav__link"]} onClick={onOpenProjects}>
          PROJECTS
        </li>
        <li className={css["top-nav__link"]} onClick={onOpenContacts}>
          CONTACTS
        </li>
      </ul>
    </nav>
  );
};

export default TopNav;
