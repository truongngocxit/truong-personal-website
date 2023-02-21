import css from "./Footer.module.scss";
import BareLogo from "../UI/SVG/BareLogo";
import PhoneIcon from "../UI/SVG/PhoneIcon";
import MailIcon from "../UI/SVG/MailIcon";
import GithubIcon from "../UI/SVG/GithubIcon";
import InstagramIcon from "../UI/SVG/InstagramIcon";
import FacebookIcon from "../UI/SVG/FacebookIcon";
import LinkedinIcon from "../UI/SVG/LinkedinIcon";

const Footer = function ({ className = "" }) {
  return (
    <footer className={`${css["footer"]} ${className}`}>
      <div className={css["footer__contacts"]}>
        <h3 className={css["footer__contacts__heading"]}>{">"} CONTACT INFO</h3>
        <ul className={css["footer__contacts__items"]}>
          <li className={css["footer__contacts__item"]}>
            <MailIcon />
            <span>nguyenphutruong1997@gmail.com</span>
          </li>
          <li className={css["footer__contacts__item"]}>
            <PhoneIcon />
            <span>+84 921 720 513</span>
          </li>
        </ul>
      </div>
      <div className={css["footer__channels"]}>
        <h3 className={css["footer__channels__heading"]}>{">"} MY CHANNELS</h3>
        <ul className={css["footer__channels__list"]}>
          <li className={css["footer__channels__item"]}>
            <GithubIcon className={css["footer__channels__item-icon"]} />
            <span>GitHub</span>
          </li>
          <li className={css["footer__channels__item"]}>
            <LinkedinIcon className={css["footer__channels__item-icon"]} />
            <span>LinkedIn</span>
          </li>
          <li className={css["footer__channels__item"]}>
            <FacebookIcon className={css["footer__channels__item-icon"]} />
            <span>Facebook</span>
          </li>
          <li className={css["footer__channels__item"]}>
            <InstagramIcon className={css["footer__channels__item-icon"]} />
            <span>Instagram</span>
          </li>
        </ul>
      </div>
      <div className={css["footer__foot"]}>
        <h2 className={css["footer__logo"]}>
          <BareLogo className={css["footer__logo-icon"]} />
          <span>Truong's</span>
        </h2>
        <p>© 2023 by Truong Nguyen</p>
      </div>
    </footer>
  );
};

export default Footer;

// ---LINKS--- //
//email
//phone
//website

// ---CHANNELS--- //
//GITHUB
//FACEBOOK
//INSTAGRAM
