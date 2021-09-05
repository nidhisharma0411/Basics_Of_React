import React, { Component, PureComponent } from 'react'
import Memocomp from './Memocomp'
import PureComp from './PureComp'
import RegComp from './RegComp'

class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Nidhi'
      }
    }
    
    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: 'Nidhi'
            })
        }, 2000)
    }

  render() {
      console.log('*******Parent Component Render*******')
    return (
      <div>
         Parent Component
         {/* <RegComp name={this.state.name}/>
         <PureComp name={this.state.name}/> */}
         <Memocomp name = {this.state.name}/>
      </div>
    )
  }
}

export default ParentComp
