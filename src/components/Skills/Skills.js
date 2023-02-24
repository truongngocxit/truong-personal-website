import css from "./Skills.module.scss";
import SkillItem from "./SkillItem/SkillItem";
import ReactIcon from "../UI/SVG/ReactIcon";
import JSIcon from "../UI/SVG/JSIcon";
import SASSIcon from "../UI/SVG/SASSIcon";
import HTMLIcon from "../UI/SVG/HTMLIcon";
import CSSIcon from "../UI/SVG/CSSIcon";
import PythonIcon from "../UI/SVG/PythonIcon";
import NodeIcon from "../UI/SVG/NodeIcon";
import FirebaseIcon from "../UI/SVG/FirebaseIcon";
import FigmaIcon from "../UI/SVG/FigmaIcon";
import IllustratorIcon from "../UI/SVG/IllustratorIcon";
import CloseButton from "../CloseButton/CloseButton";
import { useEffect, useState } from "react";
import LoadingBar from "../UI/LoadingBar/LoadingBar";
import promisifiedTimeout from "../../utils/promisifiedTimeout";

const Skills = function ({ className = "", onClose }) {
  const [activeTab, setActiveTab] = useState("front-end");
  const [isLoading, setIsLoading] = useState(false);
  const handleChangeActiveTab = function () {
    setActiveTab(this);
  };

  const [skillsData, setSkillsData] = useState(null);

  useEffect(() => {
    (async function () {
      setIsLoading(true);
      const response = await fetch(
        "https://personal-738e0-default-rtdb.asia-southeast1.firebasedatabase.app/skills.json"
      );
      const data = await response.json();
      const cleansedData = Object.entries(data).reduce(
        (cleansedData, currentObject) => ({
          ...cleansedData,
          [currentObject[0]]: Object.entries(currentObject[1]).map((e) => ({
            label: e[0],
            ...e[1],
            icon: icons[e[1].id],
          })),
        }),
        {}
      );
      await promisifiedTimeout(2);
      setSkillsData(cleansedData);
      setIsLoading(false);
    })();
  }, []);

  return (
    <div className={`${css["skills"]} ${className}`}>
      {/* <div className={css["skills__heading"]}>
        <h2>MY SKILLS</h2>
        <CloseButton onClose={onClose} />
      </div> */}

      <div className={css["skills__nav"]}>
        <button
          className={`${css["skills__nav-button"]} ${
            activeTab === "front-end" ? css["skills__nav-button--active"] : ""
          }`}
          onClick={handleChangeActiveTab.bind("front-end")}
        >
          FRONT-END
        </button>
        <button
          className={`${css["skills__nav-button"]} ${
            activeTab === "back-end" ? css["skills__nav-button--active"] : ""
          }`}
          onClick={handleChangeActiveTab.bind("back-end")}
        >
          BACK-END
        </button>
        <button
          className={`${css["skills__nav-button"]} ${
            activeTab === "design" ? css["skills__nav-button--active"] : ""
          }`}
          onClick={handleChangeActiveTab.bind("design")}
        >
          DESIGN
        </button>
      </div>
      <div className={css["skills__content"]}>
        {isLoading && <LoadingBar />}
        {!isLoading &&
          skillsData !== null &&
          skillsData[activeTab].map((skill) => (
            <SkillItem
              key={skill.id}
              label={skill.label}
              percent={skill.experience}
            >
              {skill.icon}
            </SkillItem>
          ))}
      </div>
    </div>
  );
};

export default Skills;

const icons = {
  react: <ReactIcon />,
  javascript: <JSIcon />,
  html: <HTMLIcon />,
  css: <CSSIcon />,
  sass: <SASSIcon />,
  nodejs: <NodeIcon />,
  firebase: <FirebaseIcon />,
  python: <PythonIcon />,
  figma: <FigmaIcon />,
  illustrator: <IllustratorIcon />,
};

const frontEndSkills = [
  {
    id: "react",
    label: "ReactJS",
    percent: 90,
    icon: <ReactIcon />,
  },
  {
    id: "javascript",
    label: "JavaScript",
    percent: 95,
    icon: <JSIcon />,
  },
  {
    id: "html",
    label: "HTML",
    percent: 80,
    icon: <HTMLIcon />,
  },
  {
    id: "css",
    label: "CSS",
    percent: 85,
    icon: <CSSIcon />,
  },
  {
    id: "scss",
    label: "SASS",
    percent: 70,
    icon: <SASSIcon />,
  },
];

const backendSkills = [
  {
    id: "nodejs",
    label: "NodeJS",
    percent: 52,
    icon: <NodeIcon />,
  },
  {
    id: "firebase",
    label: "Firebase",
    percent: 63,
    icon: <FirebaseIcon />,
  },
  {
    id: "python",
    label: "Python",
    percent: 54,
    icon: <PythonIcon />,
  },
];

const designSkills = [
  {
    id: "figma",
    label: "Figma",
    percent: 70,
    icon: <FigmaIcon />,
  },
  {
    id: "AI",
    label: "AI",
    percent: 63,
    icon: <IllustratorIcon />,
  },
];
