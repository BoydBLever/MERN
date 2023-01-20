import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Product from './components/Product';
import DisplayOne from './components/DisplayOne';
import Form from './components/Form';

function App() {

  const [allProducts, setAllProducts] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:8000/api/products")
    .then(res=>{
        console.log(res.data);
        setAllProducts(res.data);
    })
    .catch(err=> console.log(err))
  }, [])

  return (
    <div className="App">
      <h1>PRODUCT MANAGER 🖥️ </h1>
      <Form/>
      {
            allProducts.map((product, i) => {
                return <Product key={product._id} product={product}/>
        })
      }
      {/* <DisplayOne/> */}
    </div>
  );
}

export default App;
