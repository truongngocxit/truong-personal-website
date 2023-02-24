import css from "./NavLinks.module.scss";
import ToolTip from "../Tooltip/ToolTip";

const NavLinks = function ({
  onClickCV,
  onClickSkills,
  onClickProjects,
  onClickContacts,
}) {
  return (
    <ul className={css["nav-links"]}>
      <ToolTip message={"View my CV"}>
        <li className={css["nav-link"]} onClick={onClickCV}>
          <span className={css["nav-link__text"]}>MY CV</span>
        </li>
      </ToolTip>
      <ToolTip message={"View my front-end skills & more"}>
        <li className={css["nav-link"]} onClick={onClickSkills}>
          <span className={css["nav-link__text"]}>MY SKILLS</span>
        </li>
      </ToolTip>
      <ToolTip message={"View my recent projects"}>
        <li className={css["nav-link"]} onClick={onClickProjects}>
          <span className={css["nav-link__text"]}>PROJECTS</span>
        </li>
      </ToolTip>
      <ToolTip message={"View my contact details"}>
        <li className={css["nav-link"]} onClick={onClickContacts}>
          <span className={css["nav-link__text"]}>CONTACTS</span>
        </li>
      </ToolTip>
    </ul>
  );
};

export default NavLinks;
