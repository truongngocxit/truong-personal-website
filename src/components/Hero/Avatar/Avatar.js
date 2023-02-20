import css from "./Avatar.module.scss";
import { useState } from "react";
import ExpandIcon from "../../UI/SVG/ExpandIcon";
import CollapseIcon from "../../UI/SVG/CollapseIcon";

const Avatar = function ({ className }) {
  const [avatarIsShown, setAvatarIsShown] = useState(true);
  const handleToggleAvatarState = function () {
    setAvatarIsShown((state) => !state);
  };
  return (
    <div className={`${css["container"]} ${className}`}>
      <div
        className={`${css["avatar"]} ${
          avatarIsShown ? css["avatar--visible"] : css["avatar--hidden"]
        } `}
      >
        <div className={css["avatar__nav"]}>
          <span className={css["avatar__name"]}>My Avatar.png</span>
          <button
            className={css["avatar__close"]}
            onClick={handleToggleAvatarState}
          >
            {avatarIsShown ? <CollapseIcon /> : <ExpandIcon />}
          </button>
        </div>
        <img
          className={`${css["avatar__image"]} `}
          alt="Truong's portrait"
          src={require("../../../assets/avatar-img.png")}
        />
      </div>
    </div>
  );
};

export default Avatar;
