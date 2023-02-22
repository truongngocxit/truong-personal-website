import css from "./MainLogo.module.scss";
import BareLogo from "../SVG/BareLogo";

export default function MainLogo({ className, isHorizontal = false }) {
  return (
    <div
      className={`${css["logo"]} ${
        isHorizontal ? css["logo--horizontal"] : css["logo--vertical"]
      }  ${className || ""}`}
    >
      <BareLogo className={css["logo__icon"]} />
      <h2 className={css["logo__name"]}>Truong's</h2>
    </div>
  );
}
