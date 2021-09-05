import React from 'react'

//This is the way through which we can implement the higher order functions
const withCounter = (WrappedComponent, IncrementNumber) => {
    class WithCounter extends React.Component {
        constructor(props) {
            super(props)

            this.state = {
                count: 0
            }
        }

        incrementCount = () => {
            this.setState(prevState => {
                return { count: prevState.count + IncrementNumber }
            })
        }
        render() {
            return <WrappedComponent count={this.state.count}
                incrementCount={this.incrementCount}
                {...this.props} />
        }
    }
    return WithCounter
}

export default withCounter