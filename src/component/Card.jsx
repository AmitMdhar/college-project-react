function Card(props) {
  return (
    <div className="card">
        <img src={props.imagecard} alt="img" /><br />
        <h5>{props.title}</h5>
        <p>{props.description}</p>
        <button>{props.lable}</button>
    </div>
  )
}

export default Card