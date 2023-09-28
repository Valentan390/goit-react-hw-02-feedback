export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div>
      <button onClick={onLeaveFeedback} name="good" type="button">
        Good
      </button>
      <button onClick={onLeaveFeedback} name="neutral" type="button">
        Neutral
      </button>
      <button onClick={onLeaveFeedback} name="bad" type="button">
        Bad
      </button>
    </div>
  );
};
