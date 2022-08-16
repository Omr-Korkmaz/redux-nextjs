import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cart.slice';
import styles from './productCard.module.css';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.card}>
      <Image src={product.image} height={300} width={220} />
      <h4 className={styles.title}>{product.product}</h4>
      <h5 className={styles.category}>Caregory : {product.category}</h5>
      <p className={styles.price}>Price : ${product.price}</p>
      <button
        onClick={() => dispatch(addToCart(product))}
        className={styles.button}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;