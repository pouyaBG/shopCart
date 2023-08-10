import { useParams, Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useData } from '../../context/DataContext';

const Details = () => {

  const data = useData();
  const { id } = useParams();
  const product = data[id - 1];
  
  return (
    <div>
      <div>
        <img src={product.image} alt="product" />
        <div>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p><span>Category:</span> {product.category}</p>
          <div>
            <span>{product.price} $</span>
            <Link to="/">Back to Shop</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
