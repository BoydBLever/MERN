import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
    
const DisplayOne = (props) => {
    const [product, setProduct] = useState({})
    const { id } = useParams();
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, []);
    
    return (
        <div>
            <p>Title: {product.title}</p>
            <p>Description: {product.description}</p>
            <p>Price: {product.price}</p>
        </div>
    )
}
    
export default DisplayOne;

