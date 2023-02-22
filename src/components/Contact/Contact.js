import css from "./Contact.module.scss";
import BareLogo from "../UI/SVG/BareLogo";
import PhoneIcon from "../UI/SVG/PhoneIcon";
import MailIcon from "../UI/SVG/MailIcon";
import GithubIcon from "../UI/SVG/GithubIcon";
import InstagramIcon from "../UI/SVG/InstagramIcon";
import FacebookIcon from "../UI/SVG/FacebookIcon";
import LinkedinIcon from "../UI/SVG/LinkedinIcon";
import MainLogo from "../UI/MainLogo/MainLogo";

const Contact = function ({ className = "" }) {
  return (
    <footer className={`${css["contact"]} ${className}`}>
      <div className={css["contact__contacts"]}>
        <h3 className={css["contact__contacts__heading"]}>
          {">"} CONTACT INFO
        </h3>
        <ul className={css["contact__contacts__items"]}>
          <li className={css["contact__contacts__item"]}>
            <MailIcon />
            <span>nguyenphutruong1997@gmail.com</span>
          </li>
          <li className={css["contact__contacts__item"]}>
            <PhoneIcon />
            <span>+84 921 720 513</span>
          </li>
        </ul>
      </div>
      <div className={css["contact__channels"]}>
        <h3 className={css["contact__channels__heading"]}>{">"} MY CHANNELS</h3>
        <ul className={css["contact__channels__list"]}>
          <li className={css["contact__channels__item"]}>
            <GithubIcon className={css["contact__channels__item-icon"]} />
            <span>GitHub</span>
          </li>
          <li className={css["contact__channels__item"]}>
            <LinkedinIcon className={css["contact__channels__item-icon"]} />
            <span>LinkedIn</span>
          </li>
          <li className={css["contact__channels__item"]}>
            <FacebookIcon className={css["contact__channels__item-icon"]} />
            <span>Facebook</span>
          </li>
          <li className={css["contact__channels__item"]}>
            <InstagramIcon className={css["contact__channels__item-icon"]} />
            <span>Instagram</span>
          </li>
        </ul>
      </div>
      <div className={css["contact__foot"]}>
        <MainLogo isHorizontal={true} />
        <p>© 2023 by Truong Nguyen</p>
      </div>
    </footer>
  );
};

export default Contact;

// ---LINKS--- //
//email
//phone
//website

// ---CHANNELS--- //
//GITHUB
//FACEBOOK
//INSTAGRAM
