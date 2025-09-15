import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0); //hook
  function onClickHandler(){
    setCount(count+1);
  }
  function Reset(){
    setCount(0);
    alert("Why you reset the counter? Nigga");
  }
  return(
    
    <div>
      <p>Swastik body Count Counter</p>
      <button id="btn" onClick={onClickHandler}>
        Counter {count}
      </button>
      <br />
      <br />
      <button id ="btn1" onClick={Reset}>
         Reset
      </button>
      

          
    </div>

  )

}

export default App
