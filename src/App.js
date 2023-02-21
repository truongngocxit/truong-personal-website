import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import css from "./App.module.scss";

const App = function () {
  return (
    <main className={css["main"]}>
      <Hero className={css["hero"]} />
      <div className={css["section"]}>
        <Skills className={css["skills"]} />
      </div>
      <div className={css["section"]}>
        <Projects className={css["projects"]} />
      </div>
      <div className={css["section"]}>
        <Footer className={css["footer"]} />
      </div>
    </main>
  );
};

export default App;
