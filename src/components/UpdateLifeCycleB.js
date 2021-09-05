import React, { Component } from 'react'

class UpdateLifeCycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Nidhi'
      }
      console.log('UpdateLifeCycleB Constructor');
    }
    
    //We must need to include the static method if we don't include this the method is ignored
    static getDerivedStateFromProps(props, state)
    {
       //return either state or props
       console.log('UpdateLifeCycleB getDerivedStateFromProps')
       return null
    }

    shouldComponentUpdate() {
        console.log('UpdateLifeCycle shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('UpdateLifeCycle getSnapshotBeforeUpdate')
        return null
    }

    
    componentDidMount(){
        console.log('UpdateLifeCycleB ComponentDidMount')
    }

  render() {
      console.log('UpdateLifeCycleB Rendered');
    return (
      <div>
     UpdateLifeCycleB
      </div>
    )
  }
}

export default UpdateLifeCycleB
