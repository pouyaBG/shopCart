import { useParams, Link } from 'react-router-dom';
import { useData } from '../../context/DataContext';
import styles from "./D.module.css"
const Details = () => {

  const data = useData();
  const { id } = useParams();
  const product = data[id - 1];

  return (
    <div className={styles.container}>
      <img className={styles.image} src={product.image} alt="product" />
      <div className={styles.textContainer}>
        <h3>{product.title}</h3>
        <p className={styles.description}>{product.description}</p>
        <p className={styles.category}><span>Category:</span> {product.category}</p>
        <div className={styles.buttonContainer}>
          <span className={styles.price}>{product.price}$</span>
          <Link to="/">Back to Shop</Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
