import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';

class LifeCycleMount extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Nidhi'
      }
      console.log('LifeCycle Constructor');
    }
    
    //We must need to include the static method if we don't include this the method is ignored
    static getDerivedStateFromProps(props, state)
    {
       //return either state or props
       console.log('LifeCycle getDerivedStateFromProps')
       return null
    }

    componentDidMount(){
        console.log('LifeCycle ComponentDidMount')
    }

  render() {
      console.log('LifeCycle Rendered');
    return (
      <div>
        LifeCycleMount
        <LifeCycleB />
      </div>
    )
  }
}

export default LifeCycleMount
