import css from "./Footer.module.scss";

import { forwardRef } from "react";
import ThemeButton from "../ThemeButton/ThemeButton";
import NavLinks from "../NavLinks/NavLinks";

const Footer = function (
  { currentScreen, onOpenProjects, onOpenSkills, onOpenContacts, onOpenCV },
  ref
) {
  return (
    <footer className={css["footer"]} ref={ref}>
      {currentScreen === "laptop" && (
        <>
          <ThemeButton />
          <span className={css["footer__copyright"]}>
            © {new Date().getFullYear()} by Truong Nguyen
          </span>
        </>
      )}
      {currentScreen === "tablet" && (
        <NavLinks
          onClickCV={onOpenCV}
          onClickContacts={onOpenContacts}
          onClickSkills={onOpenSkills}
          onClickProjects={onOpenProjects}
        />
      )}
    </footer>
  );
};

export default forwardRef(Footer);
