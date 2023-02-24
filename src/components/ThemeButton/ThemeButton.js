import css from "./ThemeButton.module.scss";
import SunIcon from "../UI/SVG/SunIcon";
import MoonIcon from "../UI/SVG/MoonIcon";
import { useState, useEffect } from "react";

const ThemeButton = function () {
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
    <button
      className={`${css["theme-container"]} ${
        isDark ? css["theme-container--dark"] : css["theme-container--light"]
      }`}
      onClick={handleToggleTheme}
    >
      <div
        className={`${css["theme-button"]} ${
          isDark ? css["theme-button--dark"] : css["theme-button--light"]
        }`}
      >
        {isDark ? (
          <MoonIcon className={`${css["icon"]} ${css["icon--moon"]}`} />
        ) : (
          <SunIcon className={`${css["icon"]} ${css["icon--sun"]}`} />
        )}
      </div>
    </button>
  );
};

export default ThemeButton;
