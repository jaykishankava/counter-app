import React from 'react'
import "./counter.css"

const Counter = ({count,increment,decrement,Reset}) => {
  return (
    <div className='bg'>
        <h1><i>Counter App</i></h1>
        <h2>count :- {count}</h2>
        <button onClick={() => increment()}>+</button>
        {
            count == 0 ?(
         <button disabled onClick={() => decrement()}>-</button>

            ):(
         <button onClick={() => decrement()}>-</button>

            )
        }
        <button onClick={() => Reset()}><i>Reset</i></button>
    </div>
  )
}

export default Counter