const Form = (props) => {

  function handleSubmit(event) {
    event.preventDefault()
    props.setError('')

    if (props.formName.length < 3) {
      props.setError('Por favor, verifique os dados inseridos no formulário (mínimo de 3 caracteres em nome)')
      return
    }

    if (props.formName.startsWith(' ')) {
      props.setError('Por favor, verifique os dados inseridos no formulário (caractere de espaço não é permitido no início do nome)')
      return
    }

    if (props.formColor.length < 6) {
      props.setError('Por favor, verifique os dados inseridos no formulário (mínimo de 6 caracteres em cor)')
      return
    }

    if (!(/\d/.test(props.formColor))) {
      props.setError('Por favor, verifique os dados inseridos no formulário (ao menos com um caractere numérico em cor)')
      return
    }

    else {
      props.setCards([...props.cards, {
        name: props.formName,
        color: props.formColor,
      }])
    }
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
            <input value={props.formName} onChange={(event) => props.setFormName(event.target.value)} type='text' id='lname' />
          </div>
          <div className='label_and_input'>
            <label htmlFor="lcolor">Cor</label>
            <input value={props.formColor} onChange={(event) => props.setFormColor(event.target.value)} type='text' id='lcolor' />
          </div>
        </div>
        <div className='buttons'>
        <input className='addButton' type='submit' value='ADICIONAR' />
        </div>
      </form>
    </div>
  )
}

export default Form
