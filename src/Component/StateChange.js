import React,{useState} from 'react'

// Click Button And State Change...

const StateChange = () => {


const [myName, setmyName] = useState("Hello Gandhi..");

  const ChangeName = ()=>{

    let val= myName;

    if (val==="Hello Gandhi.."){
      setmyName("Hi My Name Is Gandhi Ronik.");
    }
    else{
      setmyName("Hello Gandhi..");
    }
  }
console.log(myName)

  return (
    <div className="Cont">
      <h1>{myName} </h1>
<button className="btn" onClick={ChangeName}> click me</button>

    </div>
  )
}

export default StateChange
