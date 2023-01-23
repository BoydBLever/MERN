import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

//the create component will capture form information and send form information.
const Create = (props) => {

    const navigate = useNavigate()

    const [name, setName] = useState("")

    const createAuthor = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/authors", {
            name
        })
        .then(res => {
            console.log(res.data);
            navigate("/authors");
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <form onSubmit={createAuthor} >
                Name: <input onChange={e => setName(e.target.value)} value={name} /> <br />
                <button>Submit</button> &nbsp;
                <button>Cancel</button>
            </form>
        </div>

    )
}

export default Create