import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Nidhi'
      }
      console.log('LifeCycleB Constructor');
    }
    
    //We must need to include the static method if we don't include this the method is ignored
    static getDerivedStateFromProps(props, state)
    {
       //return either state or props
       console.log('LifeCycleB getDerivedStateFromProps')
       return null
    }

    componentDidMount(){
        console.log('LifeCycleB ComponentDidMount')
    }

  render() {
      console.log('LifeCycleB Rendered');
    return (
      <div>
        LifeCycleB
      </div>
    )
  }
}

export default LifeCycleB
