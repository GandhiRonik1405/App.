import React, { useState } from 'react'

const TodoList = () => {

    const Friends = () => [{
        Name: "Ronik",
        SureName: "Gandhi",
        Age: 21
    },
    {
        Name: "Virat",
        SureName: "Kohli",
        Age: 34
    }, {
        Name: "Rohit",
        SureName: "Sharma",
        Age: 33
    }, {
        Name: "Dhoni",
        SureName: "Mahi",
        Age: 42
    }]

    const [myData, setmyData] = useState(Friends)
    const ClearArray = () => {
        setmyData([]);
    }


    const removeElem = (Name) => {

        const myNewData = myData.filter((curEle) => {
            return curEle.Name !== Name;
        })
        setmyData(myNewData);
    }


    return (
        <div className="Conta">

            {
                myData.map((curEle) => {
                    return (<h1>Name:{curEle.Name} SurName:{curEle.SureName} Age:{curEle.Age}
                        <button className="btn" onClick={() => removeElem(curEle.Name)}>Remove</button>
                    </h1>

                    )
                })

            }
            <button className="btn" onClick={ClearArray}>Clear</button>
        </div>
    )
}
export default TodoList
