import css from "./CloseButton.module.scss";
import CloseIcon from "../UI/SVG/CloseIcon";
import ToolTip from "../Tooltip/ToolTip";

const CloseButton = function ({ onClose }) {
  return (
    <ToolTip message={"Close modal"} position="top">
      <button className={css["close-button"]} onClick={onClose}>
        <CloseIcon />
      </button>
    </ToolTip>
  );
};

export default CloseButton;
