import css from "./Hero.module.scss";
import Avatar from "./Avatar/Avatar";
import About from "./About/About";

const Hero = function ({
  className = "",
  onOpenProjects,
  onOpenCV,
  currentScreen,
}) {
  return (
    <div className={`${css["hero"]} ${className}`}>
      <main className={css["hero__main"]}>
        <About onOpenProjects={onOpenProjects} onOpenCV={onOpenCV} />

        {currentScreen === "laptop" && (
          <Avatar className={css["hero__avatar"]} />
        )}
      </main>
    </div>
  );
};

export default Hero;
