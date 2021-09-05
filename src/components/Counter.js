import React, { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  setCount() {

    this.setState((prevState, props) => ({
      count: prevState.count + 1
    }))
    console.log(this.state.count);//console pe jo value log ho rhi h vo synchronous call ki wajah se hori h
    // this.state.count = this.state.count + 1;
    // console.log(this.state.count);

    // this.setState({
    //   count: this.state.count + 1
    // },
    //   () => {
    //     console.log('Callback value', this.state.count);
    //   })
    // console.log(this.state.count);
  }

  incrementFive(){
    this.setCount();
    this.setCount();
    this.setCount();
    this.setCount();
    this.setCount();
  }

  render() {
    return (
      <div>
        <h1>Count {this.state.count}</h1>
        <button onClick={() => this.incrementFive()}>
          Action
        </button>
      </div>
    )
  }
}

export default Counter



/*State ko jb bhi change krna hoga hum setState method se hi change kreinge else
baki other cases m vo kbhi successful nhi ho payega */