import React, { Component } from 'react';
// import components


class Answer extends Component {
  
  render() {
    return (
      <div> 
          {/* <button>{this.props.choices}</button> */}
          <button onClick={() => this.props.handleClick()}>{this.props.choices}</button>

      </div>
    );
  }
}

export default Answer;
