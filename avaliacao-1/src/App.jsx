import './App.css'
import Card from "./Card"
import { useState } from 'react'

function App() {
  const [formData, setFormData] = useState({ name: '', color: '' })

  function handleSubmit(event) {
    event.preventDefault()

    if (formData.name.length < 3) {
      let error = document.getElementsByClassName('inCaseOfError')
      alert('Por favor, verifique os dados inseridos no formulário (mínimo de 3 caracteres)')
      return
    }

    if (formData.name.startsWith(' ')) {
      alert('Por favor, verifique os dados inseridos no formulário (caractere de espaço não é permitido no início)')
      return
    }

    if (formData.color.length < 6) {
      alert('Por favor, verifique os dados inseridos no formulário (mínimo de 6 caracteres)')
      return
    }

    if (!(/\d/.test(formData.color))) {
      alert('Por favor, verifique os dados inseridos no formulário (ao menos com um caractere numérico)')
      return
    }

    const color = {}



  }

  return (
    <div className='App'>
      <form className='form' onSubmit={handleSubmit}>
        <div className='titleOfPage'>
          <h1>ADICIONAR NOVA COR</h1>
        </div>
        <div className='container_input'>
          <div className='label_and_input'>
            <label htmlFor='lname'>Nome</label>
            <input value={formData.name} onChange={(event) => setFormData({ ...formData, name: event.target.value })} type='text' id='lname' />
          </div>
          <div className='label_and_input'>
            <label htmlFor="lcolor">Cor</label>
            <input value={formData.color} onChange={(event) => setFormData({ ...formData, color: event.target.value })} type='text' id='lcolor' />
          </div>
        </div>
        <div className='buttons'></div>
        <input className='addButton' type='submit' value='ADICIONAR' />
      </form>
      <div className='inCaseOfError'></div>
      <div className='cards'>
        <h1>CORES FAVORITAS</h1>
      </div>
    </div>
  )
}

export default App
