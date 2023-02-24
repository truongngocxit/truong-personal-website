import css from "./Footer.module.scss";
import SunIcon from "../UI/SVG/SunIcon";
import MoonIcon from "../UI/SVG/MoonIcon";
import { useState, forwardRef, useEffect } from "react";

const Footer = function (_, ref) {
  const [isDark, setIsDark] = useState(false);
  const handleToggleTheme = function () {
    setIsDark((theme) => !theme);
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "light" : "dark"
    );
  };
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "light");
  }, []);
  return (
    <footer className={css["footer"]} ref={ref}>
      <button
        className={`${css["footer__theme-container"]} ${
          isDark
            ? css["footer__theme-container--dark"]
            : css["footer__theme-container--light"]
        }`}
        onClick={handleToggleTheme}
      >
        <div
          className={`${css["footer__theme-button"]} ${
            isDark
              ? css["footer__theme-button--dark"]
              : css["footer__theme-button--light"]
          }`}
        >
          {isDark ? (
            <MoonIcon className={css["icon--moon"]} />
          ) : (
            <SunIcon className={css["icon--sun"]} />
          )}
        </div>
      </button>
      <span className={css["footer__copyright"]}>© 2023 by Truong Nguyen</span>
    </footer>
  );
};

export default forwardRef(Footer);
