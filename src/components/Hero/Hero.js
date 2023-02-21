import css from "./Hero.module.scss";
import MainLogo from "../UI/MainLogo/MainLogo";
import ScrollDownIcon from "../UI/SVG/ScrollDownIcon";
import Avatar from "./Avatar/Avatar";
import About from "./About/About";

const Hero = function () {
  return (
    <div className={css["hero"]}>
      <MainLogo />
      <main className={css["hero__main"]}>
        <About />

        <Avatar className={css["hero__avatar"]} />
        <button className={css["hero__scrollButton"]}>
          <span className={css["hero__scrollButton__Label"]}>DOWN</span>
          <ScrollDownIcon className={css["hero__scrollButton__Icon"]} />
        </button>
      </main>
    </div>
  );
};

export default Hero;
