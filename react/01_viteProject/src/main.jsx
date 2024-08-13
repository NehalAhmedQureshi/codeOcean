
import react from "react"
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function Customapp(){
  return(
    <div>
      <h1>nehal</h1>
    </div>
  )
}

// custom css object
const domElement = {
  type : "p" ,
  props: {
      id: 'google',
      class : 'bank'
  } ,
  children : 'Hey its me Nehal!'
}

// direct excute tag
const anotherElement = (
  <a href="https://google.com">visit</a>
)

// react object 
const reactElement = react.createElement(
  'button' , 
  {
    className: "para",
    disabled: false ,
  } , 
  "visit there !"
)


createRoot(document.getElementById('root')).render(

  // anotherElement 
  // reactElement
  <App />  // => this is also write as: App 
)
