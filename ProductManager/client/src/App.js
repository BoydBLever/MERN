import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get("http://localhost:8000/api/products")
      .then(someDataResponse => {
        console.log(someDataResponse);
      })
      .catch(err => console.log("❌", err))
  }, [])

  return (
    <div className="App">
      <h1>PRODUCT MANAGER 🖥️</h1>
      <form>
        Title: <input /> <br />
        Description: <input /> <br />
        Price🏷️: <input type="number" /> <br/>
        <button>Create</button> 
      </form>
      <div>
        {
          products.map((product) => {
            return <div key={product._id}>
              title: {product.name} <br />
              description: {product.discription} <br />
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
