import React, {Component} from 'react'

class Message extends Component{
    constructor(){
        super()
        //this is the property which I used inside the class to make change dynamic
        this.state = {
          message: 'Hello Kannu'
        }
    }

    changeMessage(){
        this.setState({
            message: 'Thanku everyone'
        })
    }


    render(){
        return (
            <div>
                <h1>
                    {this.state.message}
                </h1>
                <button onClick={()=>this.changeMessage()}>
                    Subscribe
                </button>
            </div>
        )  
    }
}

export default Message;


/* React only return one html at a time and hence we want to return the single value for time being.*/