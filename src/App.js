import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import TopNav from "./components/TopNav/TopNav";
import MainLogo from "./components/UI/MainLogo/MainLogo";
import { createPortal } from "react-dom";
import Footer from "./components/Footer/Footer";
import css from "./App.module.scss";
import Modal from "./components/Modal/Modal";
import { useReducer } from "react";

const App = function () {
  const [{ projectsIsOn, contactsIsOn, skillsIsOn }, dispatchModalAction] =
    useReducer(modalReducer, modalInitialState);

  const handleOpenProjectModal = () => dispatchModalAction("PROJECTS_ON");
  const handleCloseProjectModal = () => dispatchModalAction("PROJECTS_OFF");

  const handleOpenSkillModal = () => dispatchModalAction("SKILLS_ON");

  const handleCloseSkillModal = () => dispatchModalAction("SKILLS_OFF");

  const handleOpenContactModal = () => dispatchModalAction("CONTACTS_ON");

  const handleCloseContactModal = () => dispatchModalAction("CONTACTS_OFF");

  let modal = null;
  if (projectsIsOn)
    modal = (
      <Modal>
        <Projects />
      </Modal>
    );
  if (skillsIsOn)
    modal = (
      <Modal>
        <Skills />
      </Modal>
    );
  if (contactsIsOn)
    modal = (
      <Modal>
        <Contact />
      </Modal>
    );

  return (
    <>
      <TopNav
        onOpenProjects={handleOpenProjectModal}
        onOpenSkills={handleOpenSkillModal}
        onOpenContacts={handleOpenContactModal}
      />
      <main className={css["main"]}>
        <Hero className={css["hero"]} />
      </main>
      <Footer />

      {modal}
    </>
  );
};

export default App;

const modalInitialState = {
  projectsIsOn: false,
  contactsIsOn: false,
  skillsIsOn: false,
};

const modalReducer = function (state, action) {
  switch (action) {
    case "PROJECTS_ON":
      return {
        ...state,
        projectsIsOn: true,
      };
    case "PROJECTS_OFF":
      return {
        ...state,
        projectsIsOn: false,
      };
    case "SKILLS_ON":
      return {
        ...state,
        skillsIsOn: true,
      };
    case "SKILLS_OFF":
      return {
        ...state,
        skillsIsOn: false,
      };
    case "CONTACTS_ON":
      return {
        ...state,
        contactsIsOn: true,
      };
    case "CONTACTS_OFF":
      return {
        ...state,
        contactsIsOn: false,
      };
    default:
      return { ...state };
  }
};
