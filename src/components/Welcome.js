//This is the example of Class Component through which we simply create a component
//Which is used to know what things should be rendering

import React ,{Component} from 'react';

class Welcome extends Component{
    render(){
        const {name,heroName} = this.props
        return <h1>Welcome {name} a.k.a {heroName}</h1>
    }
}

export default Welcome;