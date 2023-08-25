// import React, { Component } from 'react';
// import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
// import { Container, GlobalStyle } from './GlobalStyle';
// import { Notification } from './Notification/Notification';
// import { Section } from './Section/Section';
// import { Statistics } from './Statistics/Statistics';

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

// onLeaveFeedback = type => {
//   this.setState(prevState => ({
//     ...prevState,
//     [type]: prevState[type] + 1,
//   }));
// };

// countTotalFeedback = ({ good, neutral, bad }) => good + neutral + bad;

// countPositiveFeedbackPercentage = ({ good }) =>
//   this.countTotalFeedback === 0
//     ? 0
//     : (good / this.countTotalFeedback(this.state)) * 100;

// render() {
//   const { good, neutral, bad } = this.state;
//   const total = this.countTotalFeedback(this.state);
//   const percentage = this.countPositiveFeedbackPercentage(this.state);

//     return (
//       <Container>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={['good', 'neutral', 'bad']}
//             onLeaveFeedback={this.onLeaveFeedback}
//           />
//         </Section>
//         <Section title="Statistics">
//           {total === 0 ? (
//             <Notification message="There is no feedback!" />
//           ) : (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={this.countTotalFeedback(this.state)}
//               percentage={percentage}
//             />
//           )}
//         </Section>
//         <GlobalStyle />
//       </Container>
//     );
//   }
// }
