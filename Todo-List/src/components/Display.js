import React from 'react'

const Display = (props) => {
    return (
        <>
            {props.boxes.map((box, i) => {
                return (
                    <div
                        key={i}
                        style={{
                            backgroundColor: "yellow",
                            margin: "10px",
                            border: "solid",
                            height: "200px",
                            width: "200px",
                            display: "inline-block",
                            verticalAlign: "top",
                            textDecoration: box.status ? "line-through" : "none"
                        }}>
                        {box.color}{box.todo}
                        <input type="checkbox"
                            checked={box.status}
                            onChange={(e) => props.updateBox(e, i)}
                        />
                        <button onClick={(e) => { props.deleteBox(e, i) }}>Delete</button>
                    </div>
                )
            })}
        </>
    )
}
export default Display