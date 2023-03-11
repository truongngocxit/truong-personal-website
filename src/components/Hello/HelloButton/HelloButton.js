import css from "./HelloButton.module.scss";

const HelloButton = function ({ className = "", onClick }) {
  return (
    <button className={`${css["hello-button"]} ${className}`} onClick={onClick}>
      <span className={css["hello-button__text"]}>!</span>
    </button>
  );
};

export default HelloButton;
