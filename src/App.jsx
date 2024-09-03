import { useState } from 'react'
import './App.css'
import DigitalClock from './DigitalClock.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1>You can do it</h1> */}
      <DigitalClock />
    </>
  )
}

export default App
