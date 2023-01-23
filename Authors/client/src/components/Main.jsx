import React, {useState, useEffect} from 'react';
import axios from 'axios'

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
                return <div key={oneAuthor._id}>
                    {oneAuthor.name}
                    </div>
            })
        }
    </div>
  )
}

export default Main