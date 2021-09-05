import React, { Component } from 'react'

class EventBind extends Component {
 //here we need to create a property
  constructor(props) {
    super(props)
  
    this.state = {
       message: 'Hello'
    }
  
    //This is the way through which we do binding the data in constructor
    //this.clickHandler = this.clickHandler.bind(this);
  }
  
//This keyword within our eventHandler is undefined
/* If we want to handle message or may be anything inside event we need binding */
  // clickHandler(){
  //     this.setState({
  //       message: 'Thanku for be with me'
  //     })
  // }


  clickHandler = () =>{
    this.setState({
      message: 'Thanku for be with me'
    })
  }

/*Way to bind event handler using fat arrow function using bind */


  render() {
    return (
      <div>
       <div>{this.state.message}</div>
       {/* <button onClick={this.clickHandler.bind(this)}>Click Me</button>  */}
       <button onClick={this.clickHandler}>Click Me</button>
      </div>
    )
  }
}

export default EventBind
