import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {


    constructor(props) {
      super(props)
    
      this.state = {
         parentName: 'Parent'
      }

      //we have to perform eventbinding also 
      this.greetParent = this.greetParent.bind(this);
    }
    
    greetParent(childName){
        //normal concatenation of string 
       //alert('Hello' + this.state.parentName)
       alert(`Hello ${this.state.parentName} from ${childName}`)//this is the way of template literals
    }

    //Here I am passing a refernce as a prop to greetHandler

  render() {
    return (
      <div>
          <ChildComponent greetHandler = {this.greetParent}/>
      </div>
    )
  }
}

export default ParentComponent
