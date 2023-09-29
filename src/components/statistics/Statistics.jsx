// import { Component } from 'react';

// export class Statistics extends Component {
//   //   static defaultProps = {};

//   //   static propTypes = {};

//   render() {
//     return (
//       <div>
//         <h4>Statistics</h4>
//         <p>Good: {this.state.good}</p>
//         <p>Neutral: {this.state.neutral}</p>
//         <p>Bad: {this.state.bad}</p>
//         <p>Total: {totalFeedback}</p>
//         <p>Positive feedback: {positiveFeedbackPercentage}%</p>
//       </div>
//     );
//   }
// }
import styles from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div className={styles.divStatistics}>
      <p className={styles.statistics}>Good: {good}</p>
      <p className={styles.statistics}>Neutral: {neutral}</p>
      <p className={styles.statistics}>Bad: {bad}</p>
      <p className={styles.statistics}>Total: {total}</p>
      <p className={styles.statistics}>
        Positive feedback: {positivePercentage}%
      </p>
    </div>
  );
};
