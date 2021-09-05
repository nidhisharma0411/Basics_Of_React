import React from 'react'

function Memocomp({name}) {
    console.log('rendering memo component')
  return (
    <div>
      {name}
    </div>
  )
}

//this is introduced after 16.6 version of react 
export default React.memo(Memocomp) 
