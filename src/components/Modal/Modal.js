import css from "./Modal.module.scss";
import { createPortal } from "react-dom";
import Overlay from "../UI/Overlay";

const Modal = function ({ children, onClose }) {
  return (
    <>
      {createPortal(
        <div className={css["modal"]}>{children}</div>,
        document.getElementById("modal-root")
      )}
      {/* {createPortal(
        <Overlay onClose={onClose} />,
        document.getElementById("modal-root")
      )} */}
    </>
  );
};

export default Modal;
