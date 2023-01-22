import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const thisComponentStyle= {
    width: "60%",
    margin: "0 auto",
    textAlign: "left",
    backgroundColor: "rgb(255,229,153)",
    padding: "10px 20px",
    borderRadius: "10px"
}

const ViewOne = (props) => {

    // grab the variable from the url :id
    const { id } = useParams();

    const [thisNote, setThisNote] = useState(null)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/notes/${id}`)
        .then(res => {
            console.log(res.data);
            setThisNote(res.data);
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <div>
            {
                thisNote ? (
                    <div style={thisComponentStyle}>
                        <h5>{thisNote.isImportant ? "📎" : ""}{thisNote.title}</h5>
                        <p>{thisNote.content}</p> <br/>
        
                    </div>
                ) : "loading...."
            }
        </div>
    )
}

export default ViewOne