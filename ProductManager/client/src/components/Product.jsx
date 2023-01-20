import axios from 'axios'
import { Link } from 'react-router-dom'

const Product = ({ product }) => {
  // const [allProducts, setAllProducts] = useState([]);
  return (
    <div>
      <Link to={`/products/${product._id}`}>{product.title}</Link>
      ,{product.description}, {product.price}
      {/* {
            allProducts.map((product) => {
                return <div key={product._id}>
                    <Link to={"/products/" + product._id}>
                    {product.title} 
                    </Link>
                    , {product.description}, ${product.price}
                </div>
            })
        } */}
    </div>
  )
}

export default Product