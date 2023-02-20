import css from "./MainLogo.module.scss";
import BareLogo from "../SVG/BareLogo";

export default function MainLogo({ className }) {
  return (
    <div className={`${css["logo"]} ${className || ""}`}>
      <BareLogo className={css["logo__icon"]} />
      <h2 className={css["logo__name"]}>Truong's</h2>
    </div>
  );
}
