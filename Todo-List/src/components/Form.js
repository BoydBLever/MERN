import React, { useState } from 'react'

const Form = (props) => {

    const [boxColor, setBoxColor] = useState("");

    const submitColor = (e) => {
        e.preventDefault();
        const boxToCreate = {
            color: boxColor,
            status: false
        }
        props.addBox(boxToCreate)
    }

    return (
        <>
            <form onSubmit={submitColor}>
                To-Do: <textarea rows="2" cols="20" type="text" onChange={(e) => setBoxColor(e.target.value)} value={boxColor} />
                <button>ADD</button>
            </form>
        </>
    )
}
export default Form