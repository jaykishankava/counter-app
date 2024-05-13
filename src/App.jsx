import { useState } from "react"
import Counter from "./Counter"


function App() {
  const [count,Setcount] =useState(0)

  const increment = () =>{
    Setcount(count + 1)
  }
  
  const decrement = () =>{
    Setcount(count - 1)
  } 
  const Reset = () =>{
    let cnt=0;
    Setcount(cnt);
  }
  return (
    <div>
      <Counter count={count}
       increment={increment}
        decrement={decrement}
        Reset={Reset}/>
                
    </div>
  )
}

export default App
