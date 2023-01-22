import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const Create = (props) => {
    const navigate = useNavigate()
    //state variables for my dynamic input
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [isImportant, setIsImportant] = useState(false)

    const [errors, setErrors] = useState([]);

    const createNote = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8000/api/notes", {
            title, content, isImportant
        })
            .then(res => {
                console.log("✅ SUCCESS");
                console.log(res.data);
                navigate("/notes");
            })
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            console.log("❌ ERROR");
            console.log(err);
            console.log(err.response.data);
            })
    }

    return (
        // Form for title, content and isImportant
        <div>
            {JSON.stringify(title)} <br />
            {JSON.stringify(content)} <br />
            {JSON.stringify(isImportant)} <br />
            <hr/>
            {JSON.stringify(errors)}
            <hr/>
            <form onSubmit={createNote} >
                Title: <input onChange={e => setTitle(e.target.value)} value={title} /> <br />
                Content: <input onChange={e => setContent(e.target.value)} value={content} /> <br />
                isImportant: <input onChange={e => setIsImportant(e.target.checked)} checked={isImportant} type="checkbox" /> <br />
                <button>Create</button>
            </form>
        </div>
    )
}

export default Create