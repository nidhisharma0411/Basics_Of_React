import React from 'react'


//This is an example for functional component
//Here we want that this child component can access the data from parent component so for that purpose we use this
function ChildComponent(props) {
  return (
    <div>
      <button onClick={() => props.greetHandler('child')}>Greet Parent</button>
    </div>
  )
}

export default ChildComponent
