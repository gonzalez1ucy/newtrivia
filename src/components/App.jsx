import React, { Component } from 'react';
import '../css/App.css';
import Question from './Question.jsx';
import Answer from './Answer.jsx';
// import components

const QUESTIONS = [
  {question_text: "How many DUIS does Lindsey Lohan get in 2000's?", choices: [
    "1",
    "2",
    "230",
    "8",
  ], correct_choice_index: 3},
  {question_text: "How many Grammy's does Britney Spears have?", choices: [
    "1",
    "2",
    "230",
    "8",
  ], correct_choice_index: 2}
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: "no" };
  }

  handleClick(){
    console.log('Hello!');
    if(QUESTIONS[1]["choices"][3]) {
      console.log('Here!!');
      this.setState({
        clicked: "YAY!"
      });

    }
  };
  render() {
    return (
      <div className="app">
        Trivia!
        <Question question_text={QUESTIONS[1].question_text}/>
        <Answer handleClick={() => this.handleClick()} choices={QUESTIONS[0].choices[0]}/>
        <Answer handleClick={() => this.handleClick()} choices={QUESTIONS[0].choices[1]}/>
        <Answer handleClick={() => this.handleClick()} choices={QUESTIONS[0].choices[2]}/>
        <Answer handleClick={() => this.handleClick()} choices={QUESTIONS[0].choices[3]}/>
        </div>
    );
  }
}

export default App;