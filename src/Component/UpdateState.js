import React from 'react'

const UpdateState = () => {
  const [myObj, setmyObj] = React.useState({
    Degree:"B-Tech",
    MobileNo:8469580499



  })
  const cahngeValue = () => {
    setmyObj({...myObj,Degree:"Computer Science And Enginee.."})
  }
  return (
    <div className="Conta">
      <h1 key={myObj}>Degree:{myObj.Degree}</h1><h2>MobNum:{myObj.MobileNo}</h2> 
      <button className="btn2" onClick={cahngeValue}>UPDATE</button>
    </div>
  )
}

export default UpdateState
