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
    "6"
  ], correct_choice_index: 3},
  {question_text: "How many Grammy's does Britney Spears have?", choices: [
    "1",
    "2",
    "230",
    "6"
  ], correct_choice_index: 2}
]

class App extends Component {
  render() {
    return (
      <div className="app">
        Trivia!
        <Question question_text={QUESTIONS[0].question_text}/>
        <Answer choices={QUESTIONS[0].choices[0]}/>
        <Answer choices={QUESTIONS[0].choices[1]}/>
        <Answer choices={QUESTIONS[0].choices[2]}/>
        <Answer choices={QUESTIONS[0].choices[3]}/>
        </div>
    );
  }
}

export default App;