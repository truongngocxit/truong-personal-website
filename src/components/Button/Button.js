import css from "./Button.module.scss";

const Button = function ({ className, children, isPrimary = true }) {
  return (
    <button
      className={`${css["button"]} ${
        isPrimary ? css["button--primary"] : css["button--secondary"]
      } ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
