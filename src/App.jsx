import { useState } from 'react'
import './App.css'
import Display from './components/Display'
import Numberpad from './components/numberpad/Numberpad'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id='card' >
        <Display />
        <Numberpad />
      </div>
    </>
  )
}

export default App
