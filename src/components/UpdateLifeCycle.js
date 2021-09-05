import React, { Component } from 'react'
import UpdateLifeCycleB from './UpdateLifeCycleB';


class UpdateLifeCycle extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Nidhi'
        }
        console.log('UpdateLifeCycle Constructor');
    }

    //We must need to include the static method if we don't include this the method is ignored
    static getDerivedStateFromProps(props, state) {
        //return either state or props
        console.log('UpdateLifeCycle getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('UpdateLifeCycle ComponentDidMount')
    }


    shouldComponentUpdate() {
        console.log('UpdateLifeCycle shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('UpdateLifeCycle getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('UpdateLifeCycle compnentDidUpdate')
    }

    changeState(){
       this.setState({
           name: 'code'
       })
    }

    render() {
        console.log('UpdateLifeCycle Rendered');
        return (
            <div>
                UpdateLifeCycle
                <UpdateLifeCycleB />
                <button onClick={this.changeState}></button>
            </div>
        )
    }
}

export default UpdateLifeCycle
