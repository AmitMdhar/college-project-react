import React from 'react'

function Studentidcard(props) {
  return (
    <div className='stid'>
         <img src={props.imagecard} alt="img" /><br />
        <h5>{props.name}</h5>
        <p>{props.address}</p>
        <p>{props.phno}</p>

    </div>
  )
}

export default Studentidcard