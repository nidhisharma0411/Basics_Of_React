import React from 'react'

function List({name}) {
  return (
    <div>
       <h2>{name.date}---{name.reading}---{name.id}</h2>
    </div>
  )
}

export default List
