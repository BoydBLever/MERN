import Form from './Form'
import axios from 'axios'
import Product from './Product';
import React, { useState, useEffect } from 'react'

const Main = (props) => {

    const [allProducts, setAllProducts] = useState([]);

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
                    return <Product key={product._id} product={product} />
                })
            }
        </div>
    )
}

export default Main