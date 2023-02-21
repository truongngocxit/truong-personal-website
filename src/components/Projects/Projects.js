import css from "./Projects.module.scss";
import ChevronLeft from "../UI/SVG/ChevronLeft";
import ChevronRight from "../UI/SVG/ChevronRight";
import ExternalLinkIcon from "../UI/SVG/ExternalLinkIcon";
import PreviewImages from "./PreviewImages/PreviewImages";

const Projects = function ({ className }) {
  return (
    <div className={css["projects"]}>
      <div className={css["projects__head"]}>
        <h2 className={css["projects__heading"]}>MY PROJECTS</h2>
        <div className={css["projects__nav"]}>
          <button className={css["projects__nav-button"]}>
            <ChevronLeft />
          </button>
          <button className={css["projects__nav-button"]}>
            <ChevronRight />
          </button>
        </div>
      </div>
      <main className={css["projects__overview"]}>
        <h3>Stayfy - an online homestay booking app</h3>
        <ul>
          <li>Front-end: ReactJS & Pure SCSS/CSS</li>
          <li>Back-end: NodeJS with ExpressJS</li>
          <li>Database: Firestore</li>
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
      <PreviewImages images={stayfyImages} />
    </div>
  );
};

export default Projects;

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
