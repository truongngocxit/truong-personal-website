import css from "./Avatar.module.scss";
import { useState, useLayoutEffect, useRef, useEffect } from "react";
import ExpandIcon from "../../UI/SVG/ExpandIcon";
import CollapseIcon from "../../UI/SVG/CollapseIcon";
import ToolTip from "../../Tooltip/ToolTip";
import LoadingBar from "../../UI/LoadingBar/LoadingBar";

const Avatar = function ({ className = "" }) {
  const [avatarIsShown, setAvatarIsShown] = useState(true);
  const [avatarHasLoaded, setAvatarHasLoaded] = useState(false);
  const avatarRef = useRef(null);

  const [{ width: avatarBgWidth, height: avatarBgHeight }, setBackgroundSize] =
    useState({ width: 0, height: 0 });

  const handleAvatarHasLoaded = function () {
    setAvatarHasLoaded(true);
  };

  const handleToggleAvatarState = function () {
    setAvatarIsShown((state) => !state);
  };

  useEffect(() => {
    const avatarWidth = avatarRef.current.getBoundingClientRect().width;
    const avatarHeight = avatarRef.current.getBoundingClientRect().height;

    console.log(avatarWidth, avatarHeight);

    setBackgroundSize({
      width: avatarWidth,
      height: avatarHeight,
    });
  }, [avatarIsShown]);

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
          onLoad={handleAvatarHasLoaded}
        />
        {!avatarHasLoaded && (
          <div className={css["loading-bar"]}>
            <LoadingBar />
          </div>
        )}
      </div>
      {/* <div
        className={css["avatar__background"]}
        style={{ width: avatarBgWidth, height: avatarBgHeight }}
      /> */}
      {console.log("DOM committed")}
    </div>
  );
};

export default Avatar;
