import React, { Component } from 'react'
import Input from './Input'


//Refs kbhi bhi functional component k sath attach nhi hote ye humesha class component k sath attach hote h
class FocusInput extends Component {
    constructor(props) {
      super(props)
      this.componentRef = React.createRef()
    }

  clickHandler = () =>{
      this.componentRef.current.focusInput();
  }
    
  render() {
    return (
      <div>
        <Input  ref={this.componentRef}/>
        <button  onClick={this.clickHandler}>Focus Input</button>
      </div>
    )
  }
}

export default FocusInput
