import React from 'react';


//Here we modify this component so that wecan implement the fwd refs
// function FRInput() {
//   return (
//     <div>
//       <input type="text"/>
//     </div>
//   )
// }


//This is the way we can convert a simple function to arrow function
const FRInput =  React.forwardRef((props, ref) => {
    return (
            <div>
              <input type="text" ref={ref}/>
            </div>
          )
}) 

export default FRInput
