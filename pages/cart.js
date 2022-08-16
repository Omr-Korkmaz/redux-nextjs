import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from '../components/cartItem/CartItem';
import {clearCart} from '../redux/cart.slice'

import styles from '../styles/CartPage.module.css';

const CartPage = () => {
  const {cartItems, total, amount  } = useSelector((state) => state.cart);
  const dispatch = useDispatch();


  return (
    <div className={styles.container}>
      {amount === 0 ? (
        <section >
        <header>
          <h2>your bag</h2>
          <h4 >is currently empty</h4>
        </header>
      </section>
      ) : (
        <>
         <section >
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div >
          <h4>
            total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button
        onClick={() => dispatch(clearCart())}
        >
          clear cart
        </button>
      </footer>
    </section>
        </>
      )}
    </div>
  );
};

export default CartPage;