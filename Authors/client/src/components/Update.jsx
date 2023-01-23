import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

//update takes two axios calls
const Update = (props) => {
  const navigate = useNavigate()

  const [name, setName] = useState("")

  return (
    <div>
      <form >
                Name: <input onChange={e => setName(e.target.value)} value={name} /> <br />
                <button>Submit</button> &nbsp;
                <button>Cancel</button>
            </form>
    </div>
  )
}

export default Update