import React, { Component } from 'react';
// import components


class Answer extends Component {
  
  render() {
    return (
      <div> 
          {this.props.choices}
      </div>
    );
  }
}

export default Answer;
