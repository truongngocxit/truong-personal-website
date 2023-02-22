import css from "./CloseButton.module.scss";
import CloseIcon from "../UI/SVG/CloseIcon";

const CloseButton = function ({ onClose }) {
  return (
    <button className={css["close-button"]} onClick={onClose}>
      <CloseIcon />
    </button>
  );
};

export default CloseButton;
