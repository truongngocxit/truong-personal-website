import css from "./CVView.module.scss";
import CloseButton from "../CloseButton/CloseButton";
import LoadingBar from "../UI/LoadingBar/LoadingBar";
import { useState } from "react";

const CVView = function ({ onClose }) {
  const [cvHasLoaded, setCVHasLoaded] = useState(false);

  const handleCVHasLoad = () => setCVHasLoaded(true);

  return (
    <div className={css["cv-view"]}>
      {/* <div className={css["cv-view__header"]}>
        <h3>MY CV</h3>
        <CloseButton onClose={onClose} />
      </div> */}
      <div className={css["cv-view__cv-container"]}>
        <iframe
          className={css["cv-view__cv-content"]}
          title="CV of Nguyen Phu Truong"
          src="https://drive.google.com/file/d/149i34I9Hy0rWUj4_zIghsjxvxP9qJtqq/preview"
          //   src={require("../../assets/my-cv.pdf")}
          allow="autoplay"
          onLoad={handleCVHasLoad}
        />

        {!cvHasLoaded && <LoadingBar className={css["cv-view__loading-bar"]} />}
      </div>
    </div>
  );
};

export default CVView;
