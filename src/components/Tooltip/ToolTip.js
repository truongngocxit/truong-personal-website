import css from "./ToolTip.module.scss";
import { useState } from "react";

const ToolTip = function ({
  message = "I am a tooltip",
  position = "bottom",
  children,
  isOpen,
}) {
  const [isHovered, setIsHoverd] = useState(false);

  const handleHoverElement = function () {
    setIsHoverd(true);
  };

  const handleUnhoverElement = function () {
    setIsHoverd(false);
  };

  let style;
  //   if (position === "bottom") {
  //     style = {
  //       bottom: 0,
  //       left: "50%",
  //       transform: `translate(-50%, ${140}%)`,
  //     };
  //   } else if (position === "top") {
  //     style = {
  //       top: 0,
  //       left: "50%",
  //       transform: `translate(-50%, -${140}%)`,
  //     };
  //   }
  return (
    <div
      className={css["tooltip-container"]}
      onMouseEnter={handleHoverElement}
      onMouseLeave={handleUnhoverElement}
    >
      {isHovered && (
        <div
          className={`${css["tooltip"]} ${
            position === "top" ? css["tooltip--top"] : css["tooltip--bottom"]
          }`}
          style={style}
        >
          {<span className={css["tooltip__message"]}>{message}</span>}
        </div>
      )}
      {children}
    </div>
  );
};

export default ToolTip;
