import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

//update takes two axios calls
const Update = (props) => {
  const navigate = useNavigate()

  //grab the id from the params
  const { id } = useParams()

  const [name, setName] = useState("")

  const [errors, setErrors] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/authors/${id}`)
      .then(res => {
        console.log(res.data);
        setName(res.data.name);
      })
      .catch(err => console.log(err))
  }, [id])

  const updateAuthor = (e) => {
    e.preventDefault();

    axios.put(`http://localhost:8000/api/authors/${id}`, {
      name
    })
    .then(res => {
      console.log(res.data)
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
      {errors.map((err, index) => <p style={{color: "red"}} key={index}>{err}</p>)}
      <form onSubmit={updateAuthor} >
        Name: <input onChange={e => setName(e.target.value)} value={name} /> <br />
        <button>Submit</button> &nbsp;
        <button>Cancel</button>
      </form>
    </div>
  )
}

export default Update