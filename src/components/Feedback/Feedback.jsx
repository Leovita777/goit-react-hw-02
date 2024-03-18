import css from "./Feedback.module.css";

export const Feedback = ({
  good,
  neutral,
  bad,
  total,
  positiveFeedbackPercentage,
}) => {
  return (
    <ul className={css.feedbackContainer}>
      <li className={css.feedbackItem}>Good: {good}</li>
      <li className={css.feedbackItem}>Neutral: {neutral}</li>
      <li className={css.feedbackItem}>Bad: {bad}</li>
      <li className={css.feedbackItem}>Total: {total}</li>
      <li className={css.feedbackItem}>
        Positive: {positiveFeedbackPercentage}%
      </li>
    </ul>
  );
};

export default Feedback;
