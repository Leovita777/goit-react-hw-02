import css from "./Feedback.module.css";

const Feedback = () => {
  return (
    <ul>
      <li className={css.feedbackItem}>💖 Good</li>
      <li className={css.feedbackItem}>👌 Neutral</li>
      <li className={css.feedbackItem}>👎 Bad</li>
      <li className={css.feedbackItem}>Reset</li>
    </ul>
  );
};

export default Feedback;
