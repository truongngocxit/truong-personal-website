import css from "./Button.module.scss";

const Button = function ({ onClick, className, children, isPrimary = true }) {
  return (
    <button
      className={`${css["button"]} ${
        isPrimary ? css["button--primary"] : css["button--secondary"]
      } ${className}`}
      onClick={onClick}
    >
      <span className={css["button__text"]}>{children}</span>
    </button>
  );
};

export default Button;
