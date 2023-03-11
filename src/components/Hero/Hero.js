import css from "./Hero.module.scss";
import Avatar from "./Avatar/Avatar";
import About from "./About/About";
import HelloButton from "../Hello/HelloButton/HelloButton";

const Hero = function ({
  className = "",
  onOpenProjects,
  onOpenCV,
  currentScreen,
  onOpenHello,
}) {
  return (
    <div className={`${css["hero"]} ${className}`}>
      <main className={css["hero__main"]}>
        <About onOpenProjects={onOpenProjects} onOpenCV={onOpenCV} />

        {currentScreen === "laptop" && (
          <Avatar className={css["hero__avatar"]} />
        )}
      </main>
      <div className={css["hello-button"]}>
        <HelloButton onClick={onOpenHello} />
      </div>
    </div>
  );
};

export default Hero;
