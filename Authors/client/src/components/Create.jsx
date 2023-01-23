import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

//the create component will capture form information and send form information.
const Create = (props) => {

    const navigate = useNavigate()

    const [name, setName] = useState("")

    const [errors, setErrors] = useState([]);

    const createAuthor = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/authors", {
            name
        })
        .then(res => {
            console.log(res.data);
            navigate("/authors");
        })
        .catch(err => {
            console.log(err.response.data);
            const errorResponse = err.response.data.errors;
            const errorArr=[];
            for (const key of Object.keys(errorResponse)){
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr);
        })
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