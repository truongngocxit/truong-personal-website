import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import TopNav from "./components/TopNav/TopNav";
import Footer from "./components/Footer/Footer";
import css from "./App.module.scss";
import Modal from "./components/Modal/Modal";
import CVView from "./components/CVView/CVView";
import { useReducer, useRef, useLayoutEffect, useState } from "react";

const App = function () {
  // CONTROLS MODALS DISPLAY STATE

  const [currentScreen, setCurrentScreen] = useState("laptop");

  const [
    { projectsIsOn, contactsIsOn, skillsIsOn, cvIsOn },
    dispatchModalAction,
  ] = useReducer(modalReducer, modalInitialState);

  const handleOpenProjectModal = () => {
    dispatchModalAction("PROJECTS_ON");
    setTopModal("projects");
  };
  const handleCloseProjectModal = () => dispatchModalAction("PROJECTS_OFF");

  const handleOpenSkillModal = () => {
    dispatchModalAction("SKILLS_ON");
    setTopModal("skills");
  };
  const handleCloseSkillModal = () => dispatchModalAction("SKILLS_OFF");

  const handleOpenContactModal = () => {
    dispatchModalAction("CONTACTS_ON");
    setTopModal("contact");
  };
  const handleCloseContactModal = () => dispatchModalAction("CONTACTS_OFF");

  const handleOpenCVModal = () => {
    dispatchModalAction("CV_ON");
    setTopModal("cv");
  };
  const handleCloseCVModal = () => dispatchModalAction("CV_OFF");

  //CONTROLS MODAL STACKING ORDER

  const [topModal, setTopModal] = useState("");

  //SET PAGE HEIGHT
  const resizeObserverRef = useRef(null);
  const [mainHeight, setMainHeight] = useState("auto");

  const topNavRef = useRef(null);
  const footerRef = useRef(null);

  useLayoutEffect(() => {
    resizeObserverRef.current = new ResizeObserver(function (entries) {
      setMainHeight(
        `calc(100vh - ${
          topNavRef.current.getBoundingClientRect().height +
          footerRef.current.getBoundingClientRect().height
        }px)`
      );

      if (entries[0].contentRect.width <= 768) {
        setCurrentScreen("tablet");
      } else {
        setCurrentScreen("laptop");
      }
    });

    resizeObserverRef.current.observe(document.documentElement);

    return () => resizeObserverRef.current.disconnect();
  }, []);

  return (
    <>
      <TopNav
        ref={topNavRef}
        onOpenProjects={handleOpenProjectModal}
        onOpenSkills={handleOpenSkillModal}
        onOpenContacts={handleOpenContactModal}
        onOpenCV={handleOpenCVModal}
        currentScreen={currentScreen}
      />
      <main className={css["main"]} style={{ height: mainHeight }}>
        <Hero
          className={css["hero"]}
          onOpenProjects={handleOpenProjectModal}
          onOpenCV={handleOpenCVModal}
          currentScreen={currentScreen}
        />
      </main>
      <Footer
        ref={footerRef}
        currentScreen={currentScreen}
        onOpenProjects={handleOpenProjectModal}
        onOpenSkills={handleOpenSkillModal}
        onOpenContacts={handleOpenContactModal}
        onOpenCV={handleOpenCVModal}
      />

      {cvIsOn && (
        <Modal
          onClose={handleCloseCVModal}
          onClick={setTopModal.bind(null, "cv")}
          isOnTop={topModal === "cv"}
          title="My CV"
        >
          <CVView />
        </Modal>
      )}

      {contactsIsOn && (
        <Modal
          onClose={handleCloseContactModal}
          onClick={setTopModal.bind(null, "contact")}
          isOnTop={topModal === "contact"}
          title="My contact details"
        >
          <Contact />
        </Modal>
      )}

      {skillsIsOn && (
        <Modal
          onClose={handleCloseSkillModal}
          onClick={setTopModal.bind(null, "skills")}
          isOnTop={topModal === "skills"}
          title="My skills"
        >
          <Skills />
        </Modal>
      )}

      {projectsIsOn && (
        <Modal
          onClose={handleCloseProjectModal}
          onClick={setTopModal.bind(null, "projects")}
          isOnTop={topModal === "projects"}
          title="my projects"
        >
          <Projects />
        </Modal>
      )}
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
    case "CV_ON":
      return {
        ...state,
        cvIsOn: true,
      };
    case "CV_OFF":
      return {
        ...state,
        cvIsOn: false,
      };
    default:
      return { ...state };
  }
};

const stackingInitialState = {
  projectsTop: false,
  contactsTop: false,
  skillsTop: false,
};

const stackingReducer = function (state, action) {
  switch (action) {
    case "PROJECTS_TOP":
      return {
        projectsTop: true,
        contactsTop: false,
        skillsTop: false,
      };
    case "SKILLS_TOP":
      return {
        projectsTop: false,
        contactsTop: false,
        skillsTop: true,
      };
    case "CONTACTS_TOP":
      return {
        projectsTop: false,
        contactsTop: true,
        skillsTop: false,
      };
    default:
      return { ...state };
  }
};
