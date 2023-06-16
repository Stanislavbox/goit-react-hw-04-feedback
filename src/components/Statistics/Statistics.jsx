import PropTypes from 'prop-types';

function Statistics({ options, total, positivePercentage }) {
  return (
    <div className="statistics-wrap">
      <h3>Statistics</h3>
      <p>Good: {options.good}</p>
      <p>Natural: {options.neutral}</p>
      <p>Bad: {options.bad}</p>
      <p>Total: {total()}</p>
      <p>Positive feedback: {positivePercentage()}%</p>
    </div>
  );
}

Statistics.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};

export default Statistics;
