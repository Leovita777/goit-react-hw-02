import css from "./Options.module.css";

const Options = ({ updateFeedback, resetFeedback, totalFeedbackCount }) => {
  return (
    <div className={css.optionsContainer}>
      <button
        className={css.optionsButton}
        onClick={() => updateFeedback("good")}
      >
        💖 Good
      </button>
      <button
        className={css.optionsButton}
        onClick={() => updateFeedback("neutral")}
      >
        👌 Neutral
      </button>
      <button
        className={css.optionsButton}
        onClick={() => updateFeedback("bad")}
      >
        👎 Bad
      </button>
      {!!totalFeedbackCount && (
        <button className={css.optionsButton} onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
