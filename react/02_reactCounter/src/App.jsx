import { useState } from 'react'


function App() {

  let [counter , setCounter] = useState(0)
  // let counter = 1
  
  const addCounter = () => {
    console.log("add count");
    if (counter <= 19 && counter >= 0) {
      // counter = counter + 1 ;
      setCounter(counter + 1)
    }
  }
  const subCounter = () => {
    console.log("subtract count");
    if (counter != 0) {
      // counter = counter - 1 ;
      setCounter(counter-1)
    }
  }
  return (
    <>
    <h1>React Counter by Nehal</h1>
    <p className="counter">{counter}</p>
    <button onClick={addCounter} >Increase</button>
    <button onClick={subCounter} >Decrease</button>
    </>
  )
}

export default App
