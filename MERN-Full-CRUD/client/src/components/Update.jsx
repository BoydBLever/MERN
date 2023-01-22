import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const Update = (props) => {

    const navigate = useNavigate()

    // grab it from url params
    const {id} = useParams()

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [isImportant, setIsImportant] = useState(false)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/notes/${id}`)
        .then(res => {
            console.log(res.data);
            setTitle(res.data.title);
            setContent(res.data.content);
            setIsImportant(res.data.isImportant);
        })
        .catch(err => console.log(err))
    }, [])

    const updateNote = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8000/api/notes/${id}`, {
            title, content, isImportant
        })
            .then(res=>{
                console.log(res.data);
                navigate("/notes");
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            {JSON.stringify(title)} <br />
            {JSON.stringify(content)} <br />
            {JSON.stringify(isImportant)} <br />
            <form onSubmit={updateNote} >
                Title: <input onChange={e => setTitle(e.target.value)} value={title} /> <br />
                Content: <input onChange={e => setContent(e.target.value)} value={content} /> <br />
                isImportant: <input onChange={e => setIsImportant(e.target.checked)} checked={isImportant} type="checkbox" /> <br />
                <button>submit</button>
            </form>
        </div>
    )
}

export default Update