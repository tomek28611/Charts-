import React, { useState, useEffect } from "react";



export default function Fetch() {
    const [state, setState] = useState([]);


    useEffect(() => {
        fetch("http://localhost:5000/data")
            .then((response) => response.json())
            .then((data) => setState(data.response.entities))

    }, []);


    const words = state.map((text, index) => {
        const text1 = [text.entityId]
        const text2 = [text.type]


        return <div className="text-center font-semibold text-xl" key={index}>WORD- {text1}, TYPE- {text2}</div>

    });
    console.log(words)


    return (
        <div className="App">
            <h1 className=" mt-8 text-center text-gray-500">Slova podle typu</h1>

            <div className="mt-4">
                {words}
            </div>
        </div>
    );
}