import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Create = (props) => {

    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [position, setPosition] = useState("")

    const [errors, setErrors] = useState([]);

    const createPlayer = (e) => {
        e.preventDefault();
        axios.post("http://localhost:1337/api/players", {
            name, position
        })
        .then(res => {
            console.log(res.data);
            navigate("/players/list");
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
            {errors.map((err, index) => <p style={{color: "red"}} key={index}>{err}</p>)}
            <form onSubmit={createPlayer} >
                Name: <input onChange={e => setName(e.target.value)} value={name} /> <br />
                Position: <input onChange={e => setPosition(e.target.value)} value={position} /> <br />
                <button>Submit</button> &nbsp;
            </form>
        </div>
    )
}

export default Create