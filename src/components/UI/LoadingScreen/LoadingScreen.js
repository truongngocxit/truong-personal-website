import css from "./LoadingScreen.module.scss";
import LoadingBar from "../LoadingBar/LoadingBar";

const LoadingScreen = function () {
  return (
    <div className={css["loading-screen"]}>
      <LoadingBar />
    </div>
  );
};

export default LoadingScreen;
