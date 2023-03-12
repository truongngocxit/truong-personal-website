import css from "./Projects.module.scss";
import ChevronLeft from "../UI/SVG/ChevronLeft";
import ChevronRight from "../UI/SVG/ChevronRight";
import ExternalLinkIcon from "../UI/SVG/ExternalLinkIcon";
import PreviewImages from "./PreviewImages/PreviewImages";
import DatabaseIcon from "../UI/SVG/DatabaseIcon";
import BackendIcon from "../UI/SVG/BackendIcon";
import FrontendIcon from "../UI/SVG/FrondendIcon";
import useFetchData from "../../custom-hooks/useFetchData";
import LoadingBar from "../UI/LoadingBar/LoadingBar";
import { useState } from "react";

const Projects = function ({ className = "", onClose }) {
  const [projectIndex, setProjectIndex] = useState(0);

  const handleIncreaseProjectIndex = function () {
    setProjectIndex((index) => index + 1);
  };

  const handleDecreaseProjectIndex = function () {
    setProjectIndex((index) => index - 1);
  };

  const { isLoading, error, data } = useFetchData("projects", (rawData) =>
    Object.entries(rawData).map((e) => ({ id: e[0], ...e[1] }))
  );

  let images;
  if (data) {
    images = Object.entries(data[projectIndex].images).reduce(
      (imagesList, currentEntry) => {
        if (currentEntry[0] === "mainImg") {
          return [currentEntry[1], ...imagesList];
        } else {
          return [...imagesList, currentEntry[1]];
        }
      },
      []
    );
  }

  return (
    <div className={`${css["projects"]} ${className}`}>
      {isLoading && (
        <div className={css["projects__loading-bar"]}>
          <LoadingBar />
        </div>
      )}
      {!isLoading && data !== null && (
        <>
          <main className={css["projects__overview"]}>
            <div className={css["projects__overview__nav"]}>
              <button
                className={css["projects__overview__nav-button"]}
                onClick={handleDecreaseProjectIndex}
                disabled={!data || projectIndex === 0}
              >
                <ChevronLeft
                  className={css["projects__overview__nav-button__icon"]}
                />
              </button>
              <button
                className={css["projects__overview__nav-button"]}
                onClick={handleIncreaseProjectIndex}
                disabled={
                  !data || (images && projectIndex === images.length - 1)
                }
              >
                <ChevronRight
                  className={css["projects__overview__nav-button__icon"]}
                />
              </button>
            </div>
            <h3 className={css["projects__overview__name"]}>
              {data[projectIndex].title}
            </h3>
            <ul className={css["projects__info-list"]}>
              <li className={css["projects__info-item"]}>
                <FrontendIcon />
                <span>
                  <strong>Front-end:</strong>{" "}
                  {data[projectIndex].details.frontEnd}
                </span>
              </li>
              <li className={css["projects__info-item"]}>
                <BackendIcon />
                <span>
                  <strong>Back-end:</strong>{" "}
                  {data[projectIndex].details.frontEnd}
                </span>
              </li>
              <li className={css["projects__info-item"]}>
                <DatabaseIcon />
                <span>
                  <strong>Database:</strong>{" "}
                  {data[projectIndex].details.database}
                </span>
              </li>
            </ul>
            <div className={css["projects__overview__links"]}>
              <a
                className={`${css["projects__overview__link"]} ${css["projects__overview__link--prod"]}`}
                href={data[projectIndex].prod}
                target="_blank"
                rel="noreferrer"
              >
                <span>PROD.</span>
                <ExternalLinkIcon />
              </a>
              <a
                className={`${css["projects__overview__link"]} ${css["projects__overview__link--code"]}`}
                href={data[projectIndex].code}
                target="_blank"
                rel="noreferrer"
              >
                <span>CODE</span>
                <ExternalLinkIcon />
              </a>
            </div>
          </main>
          <PreviewImages images={images} key={data[projectIndex].id} />
        </>
      )}
    </div>
  );
};

export default Projects;

const projects = {
  stayfy: [
    require("../../assets/stayfy-background.png"),
    require("../../assets/stayfy-detail.png"),
    require("../../assets/stayfy-home.png"),
  ],
  jane: [
    require("../../assets/jane-background.png"),
    require("../../assets/jane-home.png"),
    require("../../assets/jane-store.png"),
  ],
};
