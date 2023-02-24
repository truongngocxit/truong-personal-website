import css from "./ToolTip.module.scss";
import { useState } from "react";

const ToolTip = function ({
  message = "I am a tooltip",
  position = "bottom",
  children,
  isOpen = false,
}) {
  const [isHovered, setIsHoverd] = useState(false);

  const handleHoverElement = function (event) {
    event.stopPropagation();
    setIsHoverd(true);
  };

  const handleUnhoverElement = function (event) {
    event.stopPropagation();
    setIsHoverd(false);
  };

  return (
    <div
      className={css["tooltip-container"]}
      onMouseOver={handleHoverElement}
      onMouseLeave={handleUnhoverElement}
    >
      {isHovered && (
        <div
          className={`${css["tooltip"]} ${
            position === "top" ? css["tooltip--top"] : css["tooltip--bottom"]
          }`}
        >
          {<span className={css["tooltip__message"]}>{message}</span>}
        </div>
      )}
      {children}
    </div>
  );
};

export default ToolTip;
