import React, { Component } from "react";
import FeedbackOptions from "./FeedbackOptions";
import Section from "./Section";
import Statistics from "./Statistics";

class FeedBack extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleIncrement = event => {
    console.log(event);
    let name = event.target.name;
    this.setState(prevState => ({
      [name]: prevState[name] + 1
    }));
  };

  countTotalFeedback = () => this.state.good + this.state.neutral + this.state.bad;
  countPositiveFeedbackPercentage = () => (this.countTotalFeedback() ? (this.state.good / this.countTotalFeedback()) * 100 : 0);
  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions handleIncrement={this.handleIncrement} />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positiv={this.countPositiveFeedbackPercentage().toFixed(2)}
            />
          ) : (
            <p>"No feedback given"</p>
          )}
        </Section>
      </>
    );
  }
}

export default FeedBack;
