import css from "./Avatar.module.scss";
import { useState, useRef } from "react";
import ExpandIcon from "../../UI/SVG/ExpandIcon";
import CollapseIcon from "../../UI/SVG/CollapseIcon";
import ToolTip from "../../Tooltip/ToolTip";
import LoadingBar from "../../UI/LoadingBar/LoadingBar";

const Avatar = function ({ className = "" }) {
  const [avatarIsShown, setAvatarIsShown] = useState(true);
  const [avatarHasLoaded, setAvatarHasLoaded] = useState(false);
  const avatarRef = useRef(null);

  const handleAvatarHasLoaded = function () {
    setAvatarHasLoaded(true);
  };

  const handleToggleAvatarState = function () {
    setAvatarIsShown((state) => !state);
  };

  return (
    <div className={`${css["container"]} ${className}`}>
      <div
        className={`${css["avatar"]} ${
          avatarIsShown ? css["avatar--visible"] : css["avatar--hidden"]
        } `}
        ref={avatarRef}
      >
        <div className={css["avatar__nav"]}>
          <span className={css["avatar__name"]}>My Avatar.png</span>
          <ToolTip
            message={
              avatarIsShown
                ? "Don't want to see my face?"
                : "Click to see my face"
            }
            position="top"
          >
            <button
              className={css["avatar__close"]}
              onClick={handleToggleAvatarState}
            >
              {avatarIsShown ? <CollapseIcon /> : <ExpandIcon />}
            </button>
          </ToolTip>
        </div>
        <img
          className={`${css["avatar__image"]} `}
          alt="Truong's portrait"
          src={require("../../../assets/avatar-img.png")}
          style={{ opacity: avatarHasLoaded ? 1 : 0 }}
          onLoad={handleAvatarHasLoaded}
        />
        {!avatarHasLoaded && (
          <div className={css["loading-bar"]}>
            <LoadingBar />
          </div>
        )}
      </div>

      {console.log("DOM committed")}
    </div>
  );
};

export default Avatar;
