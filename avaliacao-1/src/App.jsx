import Card from "./Card";
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Card />
      <form></form>
    </div>
  )
}

export default App
