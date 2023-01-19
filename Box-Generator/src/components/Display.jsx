import React from 'react'

const Display = (props) => {
    return (
        <>
            {props.boxes.map((color, i) => {
                return (
                    <div
                        key={i}
                        style={{
                            backgroundColor: color,
                            border: "solid",
                            margin: "40px",
                            height: `${props.size[i]}px`,
                            width: `${props.size[i]}px`,
                            display: "inline-block"
                        }}>{color}{props.size[i]}
                    </div>
                )
            })}
        </>
    )
}

export default Display