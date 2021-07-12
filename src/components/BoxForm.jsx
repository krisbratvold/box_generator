import React, { useState } from 'react';
import BoxDisplay from "./BoxDisplay"


const BoxForm = (props) => {

    const [color, setColor] = useState("");
    const [allColors, setAllColors] = useState([]);

    const handleForm = (e) => {
        e.preventDefault();
        const newColor = {
            color:color
        }
        setAllColors([...allColors, newColor]);
        console.log(allColors);
        setColor("")
    }


    return (
        <div>
        <form onSubmit={handleForm} >
            <label>Color</label>
            <input type="text" onChange={(e) => setColor(e.target.value)} value={color}/>
            <button>Add</button>
        </form>
        <BoxDisplay allColors={allColors}/>
        </div>
    )
}



export default BoxForm