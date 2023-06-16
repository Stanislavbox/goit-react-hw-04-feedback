import PropTypes from 'prop-types';
import { FeedbackWrapp, Button } from './Feedback.styled';

export function Feedback({ options, onFeedback }) {
  return (
    <FeedbackWrapp>
      {options.map(option => (
        <Button key={option} name={option} onClick={() => onFeedback(option)}>
          {option}
        </Button>
      ))}
    </FeedbackWrapp>
  );
}

Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onFeedback: PropTypes.func.isRequired,
};
