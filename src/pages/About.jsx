import { useState } from "react"
//for using hooks use useState
function About() {

  const[count,setCount]=useState(2);
  const[count1,setCount1]=useState(2);
  const[hover,setHover]=useState(false);
  const[text,setText]=useState('');
count
  return (
    <div style={{padding:'2rem',margin:"10px auto"}}>
      <div>{}</div>
      <button onClick={()=>setCount(count+1)}>increment</button><br />

      <div>{count1}</div>
      <button onClick={()=>setCount1(count1-1)}>decrement</button><br />
{/* setCount1((c)=>(c+1)) */}
      <button onMouseEnter={()=>setHover(true)}
        onMouseLeave={()=>setHover(false)}>
        {hover?"you hovers":"Hover over me"}
      </button>
      {/* e=event */}
      <input type="text" onChange={(e)=>setText(e.target)}/>
      <p>{text}</p>
    </div>
  )
}

export default About