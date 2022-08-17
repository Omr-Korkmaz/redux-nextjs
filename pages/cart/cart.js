import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../../components/cartItem/CartItem";
import { clearCart } from "../../features/cart.slice";

import styles from "./cart.module.css";

const CartPage = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const getTotalPrice = () => {
    return cartItems
      .reduce(
        (accumulator, item) => accumulator + item.quantity * item.price,
        0
      )
      .toFixed(2);
  };

  return (
    <div className={styles.container}>
      {cartItems.lenght === 0 ? (
        <section className={styles.cartEmpty}>
          <header>
            <h2>your bag </h2>
            <h4>is currently empty</h4>
          </header>
        </section>
      ) : (
        <>
          <section className={styles.cart}>
            <header>
              <h2>your bag</h2>
            </header>
            <div className={styles.cartContainer}>
              {cartItems.map((item) => {
                return <CartItem key={item.id} {...item} />;
              })}
            </div>
            <footer>
              <hr />
              <div className={styles.cartTotal}>
                <h4>
                  total <span>{getTotalPrice()}</span>
                </h4>
              </div>
              <button
                className={styles.clearBtn}
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
