import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState("Apple Computer");
  const [description, setDescription] = useState("Desktop");
  const [price, setPrice] = useState(1400);

  useEffect(() => {
    axios.get("http://localhost:8000/api/products")
      .then(someDataResponse => {
        console.log(someDataResponse);
      })
      .catch(err => console.log("❌", err))
  }, [])

  const makeProduct = (e) => {
    e.preventDefault()
    console.log(title, description, price);
    const newProduct = {
      title,
      description,
      price
    }
    axios.post("http://localhost:8000/api/products", newProduct)
      .then(newObjCreated => console.log(newObjCreated))
      .catch(err => console.log("❌❌", err))
  }

  return (
    <div className="App">
      <h1>PRODUCT MANAGER 🖥️</h1>
      

      <form onSubmit={makeProduct} >
        Title: <input onChange={(e) => setTitle(e.target.value)} value={title} /> <br />
        Description: <input onChange={(e) => setDescription(e.target.value)} value={description} /> <br />
        Price $: <input type="number" onChange={(e) => setPrice(e.target.value)} value={price} /> <br />
        <button>Create</button>
      </form>

      <div>
        {
          products.map((product) => {
            return <div key={product._id}>
              title: {product.title} <br />
              description: {product.description} <br />
              price: {product.price}
              <hr />
            </div>
          })
        }
      </div>
    </div>
  );
}

export default App;
