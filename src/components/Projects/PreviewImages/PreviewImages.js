import css from "./PreviewImages.module.scss";
import { useState, useRef, useEffect } from "react";

const PreviewImages = function ({ className, images }) {
  const imagesRef = useRef(null);
  const containerRef = useRef(null);
  const [imageIndex, setImageIndex] = useState(0);
  useEffect(() => {
    const observerOptions = {
      root: containerRef.current,
      threshold: 0.5,
    };

    const observerCallback = function (entries) {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setImageIndex(
            images.findIndex((image) => image === e.target.getAttribute("src"))
          );
        }
      });
    };

    const intersectionObserver = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    imagesRef.current.forEach((image) => intersectionObserver.observe(image));

    return () => intersectionObserver.disconnect();
  }, [images]);
  return (
    <main
      className={`${css["preview-images"]} ${className || ""}`}
      ref={containerRef}
    >
      <div className={css["preview-images__imgs"]}>
        {images.map((img) => (
          <img
            key={img}
            className={css["preview-images__img"]}
            alt="stayfy-background"
            src={img}
            ref={(node) => {
              if (!node) return;
              if (!imagesRef.current) {
                imagesRef.current = [];
              }
              imagesRef.current = [...new Set([...imagesRef.current, node])];
            }}
          />
        ))}
      </div>

      <div className={css["preview-images__dots"]}>
        {images.map((img, index) => (
          <button
            key={img}
            className={`${css["preview-images__dot"]} ${
              index === imageIndex ? css["preview-images__dot--active"] : ""
            }`}
          />
        ))}
      </div>
    </main>
  );
};

export default PreviewImages;
