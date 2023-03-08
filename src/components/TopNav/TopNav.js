import css from "./TopNav.module.scss";
import MainLogo from "../UI/MainLogo/MainLogo";
import { forwardRef } from "react";
import ThemeButton from "../ThemeButton/ThemeButton";
import NavLinks from "../NavLinks/NavLinks";

const TopNav = function (
  {
    className = "",
    onOpenProjects,
    onOpenSkills,
    onOpenContacts,
    onOpenCV,
    currentScreen,
  },
  ref
) {
  return (
    <nav className={`${css["top-nav"]} ${className}`} ref={ref}>
      <MainLogo isHorizontal={true} className={css["top-nav__logo"]} />
      {currentScreen !== "laptop" ? (
        <ThemeButton />
      ) : (
        <NavLinks
          onClickCV={onOpenCV}
          onClickContacts={onOpenContacts}
          onClickSkills={onOpenSkills}
          onClickProjects={onOpenProjects}
        />
      )}
    </nav>
  );
};

export default forwardRef(TopNav);
