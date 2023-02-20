import css from "./Hero.module.scss";
import MainLogo from "../UI/MainLogo/MainLogo";

import Avatar from "./Avatar/Avatar";
import About from "./About/About";

const Hero = function () {
  return (
    <div className={css["hero"]}>
      <MainLogo />
      <main className={css["hero__main"]}>
        <About />

        <Avatar className={css["hero__avatar"]} />
      </main>
    </div>
  );
};

export default Hero;
