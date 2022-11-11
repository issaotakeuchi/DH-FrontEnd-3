const Card = (props) => {
  return (
    <div className='eachCard' style={{backgroundColor:`${props.card.color}`}}>
      <h3>{props.card.name}</h3>
      <h3>{props.card.color}</h3>
    </div>
  )
}

export default Card
