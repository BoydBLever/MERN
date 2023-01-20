import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";

const DisplayOne = (props) => {
    const [product, setProduct] = useState({})
    const { id } = useParams();
    
    const {removeFromDom} = props;

    const deleteProduct = (productId) => {
        axios.delete(`http://localhost:8000/api/products/${productId}`)
        .then(res=>{
            removeFromDom(productId)
        })
        .catch(err => console.error(err))
    }
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                console.log(res.data.product);
                setProduct(res.data.product);
            })
            .catch(err => console.error(err));
    }, []);
    
    return (
        <div>
            <p>Title: {product.title}</p>
            <p>Description: {product.description}</p>
            <p>Price $ : {product.price}</p>
            <button onClick={(e) => {deleteProduct(product._id)}}>Delete</button>
        </div>
    )
}

export default DisplayOne;

