import css from "./Projects.module.scss";
import ChevronLeft from "../UI/SVG/ChevronLeft";
import ChevronRight from "../UI/SVG/ChevronRight";
import ExternalLinkIcon from "../UI/SVG/ExternalLinkIcon";
import PreviewImages from "./PreviewImages/PreviewImages";
import DatabaseIcon from "../UI/SVG/DatabaseIcon";
import BackendIcon from "../UI/SVG/BackendIcon";
import FrontendIcon from "../UI/SVG/FrondendIcon";
import CloseButton from "../CloseButton/CloseButton";
import CloseIcon from "../UI/SVG/CloseIcon";
import { useState } from "react";

const Projects = function ({ className = "" }) {
  const [projectIndex, setProjectIndex] = useState(0);

  const handleIncreaseProjectIndex = function () {
    setProjectIndex((index) => index + 1);
  };

  const handleDecreaseProjectIndex = function () {
    setProjectIndex((index) => index - 1);
  };

  return (
    <div className={`${css["projects"]} ${className}`}>
      <div className={css["projects__head"]}>
        <h2 className={css["projects__heading"]}>MY PROJECTS</h2>
        <div className={css["projects__nav"]}>
          <button
            className={css["projects__nav-button"]}
            onClick={handleDecreaseProjectIndex}
            disabled={projectIndex === 0}
          >
            <ChevronLeft />
          </button>
          <button
            className={css["projects__nav-button"]}
            onClick={handleIncreaseProjectIndex}
            disabled={projectIndex === Object.entries(projects).length - 1}
          >
            <ChevronRight />
          </button>
          <CloseButton />
        </div>
      </div>
      <main className={css["projects__overview"]}>
        <h3>Stayfy - an online homestay booking app</h3>
        <ul className={css["projects__info-list"]}>
          <li className={css["projects__info-item"]}>
            <FrontendIcon />
            <span>
              <strong>Front-end:</strong> ReactJS & Pure SCSS/CSS
            </span>
          </li>
          <li className={css["projects__info-item"]}>
            <BackendIcon />
            <span>
              <strong>Back-end:</strong> NodeJS with ExpressJS
            </span>
          </li>
          <li className={css["projects__info-item"]}>
            <DatabaseIcon />
            <span>
              <strong>Database:</strong> Firestore
            </span>
          </li>
        </ul>
        <div className={css["projects__overview__links"]}>
          <button
            className={`${css["projects__overview__link"]} ${css["projects__overview__link--prod"]}`}
          >
            <span>PROD.</span>
            <ExternalLinkIcon />
          </button>
          <button
            className={`${css["projects__overview__link"]} ${css["projects__overview__link--code"]}`}
          >
            <span>CODE</span>
            <ExternalLinkIcon />
          </button>
        </div>
      </main>
      <PreviewImages
        images={Object.entries(projects)[projectIndex][1]}
        key={Object.entries(projects)[projectIndex][0]}
      />
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

const stayfyImages = [
  require("../../assets/stayfy-background.png"),
  require("../../assets/stayfy-detail.png"),
  require("../../assets/stayfy-home.png"),
];

const janeImages = [
  require("../../assets/jane-background.png"),
  require("../../assets/jane-home.png"),
  require("../../assets/jane-store.png"),
];
