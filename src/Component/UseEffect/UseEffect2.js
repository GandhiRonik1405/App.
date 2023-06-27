import React, { useState, useEffect } from 'react'

const UseEffect2 = () => {
    const [WidthCount, setWidthCount] = useState(window.screen.width);

    const actualWidth = () => {
        console.log(window.innerWidth);
        setWidthCount(window.innerWidth);
    }


    useEffect(() => {
        console.log("Add Event");
        window.addEventListener("resize", actualWidth);

        return () => {
            console.log("Remove Event");
            window.removeEventListener("resize", actualWidth);
        }
    });

    return (
        <div className="Conta">
            <p>The Acual Size Of The Window Is: </p>
            <h1>{WidthCount}</h1>
        </div>
    )
}

export default UseEffect2
