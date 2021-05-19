import React from 'react'

function Counter1({title,...obj}) {
   
    return (
        <div>
            <h2>{title} {obj.count}{obj.place}</h2>
        </div>
    )
}

export default Counter1

