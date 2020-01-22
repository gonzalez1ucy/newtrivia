import React, { Component } from 'react';
import '../css/App.css';
import Question from 'Question.jsx';
import Answer from 'Answer.jsx';
// import components

class App extends Component {

  render() {
    return (
      <div className="app">
        Trivia!
        <Question />
        <Answer />
        <Answer />
        </div>
    );
  }
}

export default App;