import React, { useState } from 'react'
import axios from 'axios'

const Form = (props) => {
   
    const [title, setTitle] = useState("Apple Computer");
    const [description, setDescription] = useState("Desktop");
    const [price, setPrice] = useState(1400);

    const makeProduct = (e) => {
        e.preventDefault()
        console.log(title, description, price);
        const newProduct = {
            title,
            description,
            price
        }
        axios.post("http://localhost:8000/api/products", newProduct)
            .then(res => console.log(res.data))
            .catch(err => console.log("❌❌", err))
    }

    return (
        <div>
            <form onSubmit={makeProduct} >
                Title: <input onChange={(e) => setTitle(e.target.value)} value={title} /> <br />
                Description: <input onChange={(e) => setDescription(e.target.value)} value={description} /> <br />
                Price $: <input type="number" onChange={(e) => setPrice(e.target.value)} value={price} /> <br />
                <button>Create</button>
            </form>
            <hr/>
        </div>
    )
}

export default Form