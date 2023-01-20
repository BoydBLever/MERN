import Form from './Form'
import axios from 'axios'
import Product from './Product';
import React, { useState, useEffect } from 'react'
import DisplayOne from './DisplayOne';

const Main = (props) => {

    const [allProducts, setAllProducts] = useState([]);

    const removeFromDom = productId => {
        setAllProducts(allProducts.filter(product=>product._id != productId))
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => {
                console.log(res.data);
                setAllProducts(res.data);
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <Form />
            {
                allProducts.map((product, i) => {
                    return <Product key={product._id} product={product} removeFromDom={removeFromDom} />
                })
            }
        </div>
    )
}

export default Main