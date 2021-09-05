//This example is used to deal with handling of events

import React, { Component } from 'react'

class ClassClick extends Component {
    clickHandler() {
        console.log('object');
    }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click Me</button>
      </div>
    )
  }
}

export default ClassClick
