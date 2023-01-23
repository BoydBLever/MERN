import React, {useState, useEffect} from 'react';
import axios from 'axios'
import authorStyle from './main.module.css';
import {useNavigate} from 'react-router-dom';

const Main = (props) => {
    const navigate = useNavigate();
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
        .then(res => {
            console.log(res.data);
            setAuthors(res.data)

        })
        .catch(err => console.log(err))
    }, [])

    // go to update route
    const goToUpdate = (updateID) => {
        console.log(updateID);
        navigate(`/edit/${updateID}`)
    } 

    const deleteAuthor = (deleteID) => {
        console.log(deleteID);

        if (window.confirm("Are you sure?")) {

            axios.delete(`http://localhost:8000/api/authors/${deleteID}`)
            .then(res => {
                console.log(res.data);
                console.log("DB DELETE IS SUCCESSFUL!");
                
                // remove from the DOM after a successful delete
                setAuthors(authors.filter((author)=> author._id !== deleteID))
            })
            .catch(err => console.log(err))
        }
    }
  
    return (
    <div>
        <h1>All Authors</h1>
        {
            // TO DO: SORT AUTHORS ALPHABETICALLY
            authors.map((oneAuthor, index)=> {
                return (
                <div key={oneAuthor._id} className={authorStyle.author}>
                    <h1>{oneAuthor.name}</h1>
                    <button onClick={() => goToUpdate(oneAuthor._id)}>Edit</button>
                    <button onClick={()=>deleteAuthor(oneAuthor._id)}>Delete</button>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Main