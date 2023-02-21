import css from "./Skills.module.scss";
import { useState } from "react";
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

const Skills = function () {
  const [activeTab, setActiveTab] = useState("frontEnd");
  const handleChangeActiveTab = function () {
    setActiveTab(this);
  };

  let skills = frontEndSkills;

  if (activeTab === "frontEnd") {
    skills = frontEndSkills;
  }
  if (activeTab === "backEnd") {
    skills = backendSkills;
  }
  if (activeTab === "design") {
    skills = designSkills;
  }

  return (
    <div className={css["skills"]}>
      <h2 className={css["skills__heading"]}>MY SKILLS</h2>
      <div className={css["skills__section"]}>
        <div className={css["skills__nav"]}>
          <button
            className={`${css["skills__nav-button"]} ${
              activeTab === "frontEnd" ? css["skills__nav-button--active"] : ""
            }`}
            onClick={handleChangeActiveTab.bind("frontEnd")}
          >
            FRONT-END
          </button>
          <button
            className={`${css["skills__nav-button"]} ${
              activeTab === "backEnd" ? css["skills__nav-button--active"] : ""
            }`}
            onClick={handleChangeActiveTab.bind("backEnd")}
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
          {skills.map((skill) => (
            <SkillItem
              key={skill.id}
              label={skill.label}
              percent={skill.percent}
            >
              {skill.icon}
            </SkillItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

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
    percent: 98,
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
