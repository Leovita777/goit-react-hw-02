import css from "./Notification.module.css";

const Notification = () => {
  return (
    <div className={css.feedbackAlternativeContainer}>
      <p className={css.feedbackAlternativeText}>No feedback yet</p>
    </div>
  );
};

export default Notification;
