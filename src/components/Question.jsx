import React, { Component } from 'react';
// import components        


class Question extends Component {
  // constructor(props) {

  // }
  render() {
    return (
      <div>
         {this.props.question_text}
      </div>
    );
  }
}
//Add your QuestionText, Reset Button and AnswerButtons here.  
export default Question;
