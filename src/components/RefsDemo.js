import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
      super(props)
      this.inputRef = React.createRef()
      this.cbRef = null
      this.setCbRef = element => {
          this.cbRef = element
      }
    }

    componentDidMount(){
       if(this.cbRef){
           this.cbRef.focus()
       }
    }

    clickHandler = () => {
        alert(this.inputRef.current.value)
    }
    
  render() {
    return (
      <div>
        <input type="text"  ref={this.inputRef}/>
        <input type="text"  ref={this.setCbRef}/>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default RefsDemo

//refs is the way through which we can focus on any value
/*
Three steps through which we create the ref means we can create the way just to focus on that particular 
input fields

1. First create the input field and create the ref inside that particular input field
2. include the ref inside the input field so that we can add the refernce in that inputfield
3. Here in last we called focus method

*/
