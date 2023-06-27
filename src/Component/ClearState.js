import React, { useState } from 'react'

const ClearState = () => {

    const Friends = () => [{
        Name: "Ronik",
        SureName: "Gandhi",
        Age: 21
    },
    {
        Name: "Mihir",
        SureName: "Jain",
        Age: 21
    }]

    const [myData, setmyData] = useState(Friends)
    const ClearArray = () => {
        setmyData([]);
    }
    return (
        <div className="Conta">

            {
                myData.map((curEle) => {
                    return <h1>Name:{curEle.Name} SurName: Age:{curEle.Age}</h1>
                })
            }
            <button className="btn" onClick={ClearArray}>Clear</button>
        </div>
    )
}

export default ClearState
