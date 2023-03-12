import css from "./Hello.module.scss";

const Hello = function ({ onOpenCV }) {
  return (
    <div className={css["hello"]}>
      <h3 className={css["hello__heading"]}>
        If you're a recruiter, please read.
      </h3>
      <div className={css["hello__content"]}>
        <p>
          Hi there! I'm Truong. I created this website to showcase some of my
          recent pet projects.
        </p>
        <p>
          I am searching for a React fresher/intern job. I am work-oriented and
          can self-learn new things quickly. As an ex-marketer, I can also
          design and write (in both Vietnamese & English) decently. I'm willing
          to intern for no compensation - all I ask is experience in return.
        </p>
        <p>If you have any opportunity, please contact me:</p>
      </div>

      <button className={css["hello__button"]} type="button" onClick={onOpenCV}>
        <span className={css["hello__button__text"]}>VIEW MY CV</span>
      </button>
    </div>
  );
};

export default Hello;
