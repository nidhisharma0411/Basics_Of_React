import React from 'react'

function FunctionClick() {

  function clickHandler(){
    console.log("Button click");
  }
  //here we pass the function as event handler
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default FunctionClick
