import { useState } from 'react'
import Card from "./Card/Index"
import Form from "./Form/Index"
import './App.css'

function App() {
  const [formName, setFormName] = useState("")
  const [formColor, setFormColor] = useState("")
  const [cards, setCards] = useState([])
  const [error, setError] = useState([])

  /*card = {
    name:
    color:
  }*/

  return (
    <div className='main'>

      <Form
        formName={formName}
        formColor={formColor}
        cards={cards}
        error={error}
        setFormName={setFormName}
        setFormColor={setFormColor}
        setCards={setCards}
        setError={setError}
      />

      <div className='inCaseError'><p>{error}</p></div>

      <div className='cards'>
        <div className='titleCards'>
        <h1>CORES FAVORITAS</h1>
        </div>
        <div className='itemsCard'>

          {
            cards.map((card) => {
              return (
                <Card card={card} />
              )
            })
          }
        </div>
      </div>
    </div>

  )
}

export default App
