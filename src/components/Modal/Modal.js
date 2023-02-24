import css from "./Modal.module.scss";
import ToolTip from "../Tooltip/ToolTip";
import { useState, cloneElement, useRef } from "react";
import CloseButton from "../CloseButton/CloseButton";

const Modal = function ({
  children,
  onClose,
  isOnTop = false,
  onClick,
  title,
}) {
  const [isGrabbing, setIsGrabbing] = useState(false);

  const modalRef = useRef(null);
  const { current: modalElement } = modalRef;

  const [{ modalX, modalY }, setModalCoords] = useState({
    modalX: document.documentElement.getBoundingClientRect().width / 2,
    modalY: document.documentElement.getBoundingClientRect().height / 2,
  });

  const [{ cursorX, cursorY }, setCursorCoords] = useState({
    cursorX: 0,
    cursorY: 0,
  });

  const handleCursorDown = function (event) {
    setIsGrabbing(true);
    setCursorCoords({
      cursorX: event.clientX,
      cursorY: event.clientY,
    });
  };

  const handleCursorMove = function (event) {
    if (!isGrabbing) return;

    let offsetX = event.clientX - cursorX;
    let offsetY = event.clientY - cursorY;

    if (modalElement.getBoundingClientRect().x <= 0 && offsetX < 0) {
      offsetX = 0;
    }

    if (modalElement.getBoundingClientRect().y <= 0 && offsetY < 0) {
      offsetY = 0;
    }

    if (
      modalElement.getBoundingClientRect().y +
        modalElement.getBoundingClientRect().height >=
        window.innerHeight &&
      offsetY > 0
    ) {
      offsetY = 0;
    }

    if (
      modalElement.getBoundingClientRect().x +
        modalElement.getBoundingClientRect().width >=
        window.innerWidth &&
      offsetX > 0
    ) {
      offsetX = 0;
    }

    setCursorCoords({
      cursorX: event.clientX,
      cursorY: event.clientY,
    });
    setModalCoords({
      modalX: modalX + offsetX,
      modalY: modalY + offsetY,
    });
  };

  const handleCursorUp = function (event) {
    setIsGrabbing(false);
  };

  return (
    <>
      <div
        onClick={onClick}
        ref={modalRef}
        className={css["modal"]}
        style={{
          left: modalX,
          top: modalY,
          zIndex: isOnTop ? 50 : 20,
        }}
      >
        <ToolTip position="top" message="Hold to drag">
          <div
            className={css["modal__nav"]}
            onPointerDown={handleCursorDown}
            onPointerMove={handleCursorMove}
            onPointerUp={handleCursorUp}
          >
            <h3>{title.toUpperCase()}</h3>
            <CloseButton onClose={onClose} />
          </div>
        </ToolTip>
        {cloneElement(children, { onClose })}
      </div>

      {/* {createPortal(
        <Overlay onClose={onClose} />,
        document.getElementById("modal-root")
      )} */}
    </>
  );
};

export default Modal;
