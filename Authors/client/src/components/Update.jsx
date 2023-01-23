import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

//update takes two axios calls
const Update = (props) => {
  const navigate = useNavigate()

  //grab the id from the params
  const { id } = useParams()

  const [name, setName] = useState("")

  useEffect(() => {
    axios.get(`http://localhost:8000/api/authors/${id}`)
      .then(res => {
        console.log(res.data);
        setName(res.data.name);
      })
      .catch(err => console.log(err))
  }, [])

  const updateAuthor = (e) => {
    e.preventDefault();

    axios.put(`http://localhost:8000/api/authors/${id}`, {
      name
    })
    .then(res => {
      console.log(res.data)
      navigate("/authors");
    })
    .catch(err => console.log(err))
  }

  return (
    <div>
      <form onSubmit={updateAuthor} >
        Name: <input onChange={e => setName(e.target.value)} value={name} /> <br />
        <button>Submit</button> &nbsp;
        <button>Cancel</button>
      </form>
    </div>
  )
}

export default Update