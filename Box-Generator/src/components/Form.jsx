import React, { useState } from 'react'

const Form = (props) => {

    const [boxColor, setBoxColor] = useState(JSON.parse(localStorage.getItem('boxColor')));
    const [boxSize, setBoxSize] = useState(JSON.parse(localStorage.getItem('boxSize')));

    //Local Storage: every time I update state I would be saving it too.    

    const submitBox = (e) => {
        e.preventDefault(); //prevent re-routing the page
        localStorage.setItem('BoxColor', JSON.stringify(boxColor));
        localStorage.setItem('BoxSize', JSON.stringify(boxSize));
        props.addBox(boxColor, boxSize);
        setBoxColor("");
        setBoxSize("");
    }

    return (
        <>
            <></>
            <form onSubmit={submitBox}>
                color: <input onChange={(e) => setBoxColor(e.target.value)} value={boxColor} /> <br />
                size: <input type="number" onChange={(e) => setBoxSize(e.target.value)} value={boxSize}></input> px <br />
                <button>ADD</button>
            </form>
        </>

    )
}

export default Form