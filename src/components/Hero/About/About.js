import css from "./About.module.scss";
import Button from "../../Button/Button";
import FolderIcon from "../../UI/SVG/FolderIcon";
import ProfileIcon from "../../UI/SVG/ProfileIcon";
import { useState, useEffect } from "react";

const About = function ({ className }) {
  const [numOfLetter, setNumOfLetter] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (numOfLetter === 0 && !isTyping) {
        setNumOfLetter(0);
        setIsTyping(true);

        if (currentWordIndex === jobs.length - 1) {
          setCurrentWordIndex(0);
        } else {
          setCurrentWordIndex((index) => index + 1);
        }
      } else {
        setNumOfLetter((num) => num + (isTyping ? 1 : -1));
      }
    }, 200);

    if (numOfLetter === jobs[currentWordIndex].length) {
      setTimeout(() => {
        setIsTyping(false);
      }, 800);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isTyping, currentWordIndex, numOfLetter]);

  return (
    <div className={`${css["about"]} ${className}`}>
      <h1 className={css["about__heading"]}>
        Hi! I'm Truong.
        <br />
        I'm a {jobs[currentWordIndex].slice(0, numOfLetter)}
        <span
          className={`${css["about__cursor"]} ${
            numOfLetter >= jobs[currentWordIndex].length
              ? css["about__cursor--running"]
              : css["about__cursor--paused"]
          }`}
        />
      </h1>
      <p>
        I'm a wannabe web developer and designer, who also loves to write.
        Currently, I'm looking for a ReactJS fresher opportunity.
      </p>
      <div className={css["about__nav-buttons"]}>
        <Button className={css["about__nav-button"]}>
          <span>MY PROJECTS</span>
          <FolderIcon />
        </Button>
        <Button isPrimary={false} className={css["about__nav-button"]}>
          <span>MY CV</span>
          <ProfileIcon />
        </Button>
      </div>
    </div>
  );
};

export default About;

const jobs = ["Web Developer", "Designer", "Copywriter"];
