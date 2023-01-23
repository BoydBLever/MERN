import React, {useState, useEffect} from 'react';
import axios from 'axios'
import authorStyle from './main.module.css';

const Main = (props) => {
  
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
        .then(res => {
            console.log(res.data);
            setAuthors(res.data)

        })
        .catch(err => console.log(err))
    }, [])
  
    return (
    <div>
        <h1>All Authors</h1>
        {
            authors.map((oneAuthor, index)=> {
                return <div key={oneAuthor._id} className={authorStyle.author}>
                    {oneAuthor.name}
                    <button>Edit</button>
                    <button>Delete</button>
                    </div>
            })
        }
    </div>
  )
}

export default Main