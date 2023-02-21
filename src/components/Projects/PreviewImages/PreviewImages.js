import css from "./PreviewImages.module.scss";

const PreviewImages = function ({ className, images }) {
  return (
    <main className={`${css["preview-images"]} ${className}`}>
      <div className={css["preview-images__imgs"]}>
        {/* <img
          className={css["preview-images__img"]}
          alt="stayfy-background"
          src={require("../../../assets/stayfy-background.png")}
        />
        <img
          className={css["preview-images__img"]}
          alt="stayfy-background"
          src={require("../../../assets/stayfy-home.png")}
        />
        <img
          className={css["preview-images__img"]}
          alt="stayfy-background"
          src={require("../../../assets/stayfy-detail.png")}
        /> */}

        {images.map((img) => (
          <img
            className={css["preview-images__img"]}
            alt="stayfy-background"
            src={img}
          />
        ))}
      </div>

      <div className={css["preview-images__dots"]}>
        <button
          className={`${css["preview-images__dot"]} ${
            true ? css["preview-images__dot--active"] : ""
          }`}
        />
        <button
          className={`${css["preview-images__dot"]} ${
            false ? css["preview-images__dot--active"] : ""
          }`}
        />
        <button
          className={`${css["preview-images__dot"]} ${
            false ? css["preview-images__dot--active"] : ""
          }`}
        />
      </div>
    </main>
  );
};

export default PreviewImages;

const stayfyImages = [
  require("../../../assets/stayfy-background.png"),
  require("../../../assets/stayfy-detail.png"),
  "../../../assets/stayfy-home.png",
];
