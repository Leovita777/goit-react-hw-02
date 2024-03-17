import css from "./Options.module.css";

const Options = ([updateFeedbackCount]) => {
  return (
    <div className={css.optionsContainer}>
      <button
        className={css.optionsButton}
        onClick={() => updateFeedbackCount("good")}
      >
        💖 Good
      </button>
      <button
        className={css.optionsButton}
        onClick={() => updateFeedbackCount("neutral")}
      >
        👌 Neutral
      </button>
      <button
        className={css.optionsButton}
        onClick={() => updateFeedbackCount("bad")}
      >
        👎 Bad
      </button>
      <button className={css.optionsButton}>Reset</button>
    </div>
  );
};

export default Options;
