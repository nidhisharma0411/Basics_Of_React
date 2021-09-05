import React from 'react'
import List from './List'

function NameList() {
    const names = [{ date: '12/1/2011', reading: 3, id: 20055 },
    { date: '13/1/2011', reading: 5, id: 20053 },
    { date: '14/1/2011', reading: 6, id: 45652 }]
    const list = ['nidhi','niharika','nishtha','nidhi']
    const nameList = list.map((name,index) =><h2 key={index}>{index}-{name}</h2>)
    return (
        <div>
            {
                nameList
            }
        </div>
    )
}

export default NameList
