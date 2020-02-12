import React, { Component } from 'react';
import '../css/App.css';
import Question from './Question.jsx';
import Answer from './Answer.jsx';
// import components

const QUESTIONS = [
  {question: "Lindsey Lohan", answers: [
    "1",
    "2",
    "230"
  ]}
]

class App extends Component {

  render() {
    return (
      <div className="app">
        Trivia!
        <Question question_text={"What color is "}/>
        <Answer choices={"10"}/>
        <Answer choices={"20"}/>
        <Answer choices={"30"}/>
        <Answer choices={"40"}/>
        </div>
    );
  }
}

export default App;