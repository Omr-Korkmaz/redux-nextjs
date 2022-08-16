// import { ChevronDown, ChevronUp } from '../icons';
import { removeItem, increase, decrease } from '../../redux/cart.slice';
import { useDispatch } from 'react-redux';
import Image from 'next/image'
import styles from "./cartItem.module.css"

const CartItem = ({ id, image, title, price, quantity }) => {
  const dispatch = useDispatch();
  return (
    <article className={styles.cartItem}>
        <div className={styles.cartItem__image}>

      <Image width={200} height={200} src={image} alt={title} />
        </div>
      <div>
        <h4>{title}</h4>
        <h4 className={styles.itemPrice}>${price}</h4>
        <button
          className={styles.removeBtn}
          onClick={() => {
            dispatch(removeItem(id));
          }}
        >
          remove
        </button>
      </div>
      <div className={styles.amountButtons}>
        <button
          className={styles.quantityBtn}
          onClick={() => {
            dispatch(increase({ id }));
          }}
        >
          {/* <ChevronUp /> */}
          +
        </button>
        <p className={styles.quantity}>{quantity}</p>
        <button
          className={styles.quantityBtn}
          onClick={() => {
            if (quantity === 1) {
              dispatch(removeItem(id));
              return;
            }
            dispatch(decrease({ id }));
          }}
        >
            -
          {/* <ChevronDown /> */}
        </button>
      </div>
    </article>
  );
};
export default CartItem;