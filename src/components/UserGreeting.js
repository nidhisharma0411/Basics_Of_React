import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }

    render() {
        // if (this.state.isLoggedIn) {
        //     return (
        //         <div>  Hello Nidhi </div>
        //     )
        // }
        // else {
        //     return (
        //         <div>  Hiiii Nidhi </div>
        //     )
        // }
        // let message
        // if(this.state.isLoggedIn){
        //     message = <div>Hello Neha</div>
        // }
        // else
        // {
        //     message = <div>Hello Niharika</div>
        // }
        // return <div>{message}</div>

        return (
            this.state.isLoggedIn ?
                <div>  Hiiii Nidhi </div> :
                <div>  Hello Nidhi </div>
        )
    }
}

export default UserGreeting
