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

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </div>
  );
};
