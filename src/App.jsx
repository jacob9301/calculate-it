import { useState } from 'react'
import './App.css'
import Display from './components/Display'
import Numberpad from './components/numberpad/Numberpad'

function App() {

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
