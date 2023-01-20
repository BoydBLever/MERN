import axios from 'axios'
import { Link } from 'react-router-dom'

const Product = ({ product }) => {
  // const [allProducts, setAllProducts] = useState([]);
  return (
    <div>
      <Link to={`/products/${product._id}`}>{product.title}</Link>
      ,{product.description}, {product.price}
    </div>
  )
}

export default Product