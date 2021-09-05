import React, { Component } from 'react'

class Input extends Component {
    constructor(props) {
        //ye kam hum basically isliye krte h ki han hmko koi nyi property
      super(props)
      this.inputRef = React.createRef()
    }

    focusInput(){
        this.inputRef.current.focus()
    }
    
  render() {
    return (
      <div>
         <input type="text" ref={this.inputRef}/>
      </div>
    )
  }
}

export default Input
