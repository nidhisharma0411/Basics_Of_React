import React from 'react';


const Hello = () =>{
    // return (
    //     <div>
    //         <h1>Hello Nidhi Sample!</h1>
    //     </div>
    // )

//The createElement will tag three parameters as input html tag, sample parameter and input
return React.createElement(
    'div', 
    {id: 'hello' , className: 'Sample'},
    React.createElement('h1', null, 'Hello Nidhi'))
} 


export default Hello;