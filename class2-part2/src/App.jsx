import React from 'react'
import { useState } from 'react'

const App = () => {
  const [a, setText] = useState(0)
  function changeText() {
    setText(5);
  }
  return (
   
    <div>
      <h1>{a}</h1>
      <button onClick={()=>setA(a+1)}>Click</button>
      <button onClick={()=>a>0?setA(a-1):0}>Decrement</button>
    </div>
  )
}
export default App; 
