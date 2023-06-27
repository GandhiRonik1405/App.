import React, { useEffect, useState } from 'react'

const UseEffect = () => {

    const [Count, setCount] = useState(0)
    useEffect(() => {
        if(Count>=1){
            document.title=`RONIK (${Count})`;
        }else{
            document.title=`RONIK`;
       
        }

        });

    console.log("Hello UseEffect call in outside..");

    return (
        <div className="Conta">
            <h1 >{Count}</h1>
            <button className="btn" onClick={() => setCount(Count + 1)}>Count</button>
        </div>
    )
}

export default UseEffect

