import React, { Component } from 'react'
import FRInput from './FRInput'


//Here we use Forward technique for implement the refs 
class FRParentInput extends Component {
    constructor(props) {
      super(props)
    //Create an input ref
    this.inputRef = React.createRef()
    }

    clickHandler = () =>{
        this.inputRef.current.focus()
    }
    
  render() {
    return (
      <div>
        <FRInput  ref= {this.inputRef}/>
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    )
  }
}

export default FRParentInput
