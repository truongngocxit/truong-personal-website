import css from "./Hero.module.scss";
import ScrollDownIcon from "../UI/SVG/ScrollDownIcon";
import Avatar from "./Avatar/Avatar";
import About from "./About/About";
import TopNav from "../TopNav/TopNav";
import LoadingBar from "../UI/LoadingBar/LoadingBar";

const Hero = function ({ className = "", onOpenProjects, onOpenCV }) {
  return (
    <div className={`${css["hero"]} ${className}`}>
      <main className={css["hero__main"]}>
        <About onOpenProjects={onOpenProjects} onOpenCV={onOpenCV} />

        <Avatar className={css["hero__avatar"]} />
        {/* <button className={css["hero__scrollButton"]}>
          <LoadingBar className={css["hero__scrollButton__Icon"]} />
        </button> */}
      </main>
    </div>
  );
};

export default Hero;

/* <button className={css["hero__menu-button"]}>
        <MoreIcon className={css["hero__menu-button__icon"]} />
      </button>
      <MainLogo className={css["hero__logo"]} /> */
