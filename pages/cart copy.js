// import Image from 'next/image';
// import { useSelector, useDispatch } from 'react-redux';
// import {
//   incrementQuantity,
//   decrementQuantity,
//   removeFromCart,
// } from '../redux/cart.slice';
// import styles from '../styles/CartPage.module.css';

// const CartPage = () => {
//   const {cartItems, total, amount  } = useSelector((state) => state.cart);
//   const dispatch = useDispatch();

//   const getTotalPrice = () => {
//     return cart.reduce(
//       (accumulator, item) => accumulator + item.quantity * item.price,
//       0
//     );
//   };

//   return (
//     <div className={styles.container}>
//       {amount === 0 ? (
//         <h1>Cart is Empty!</h1>
//       ) : (
//         <>
//           <div className={styles.header}>
//             <div>Image</div>
//             <div>Product</div>
//             <div>Price</div>
//             <div>Quantity</div>
//             <div>Actions</div>
//             <div>Total Price</div>
//           </div>
//           {cartItems.map((item, index) => (
//             <div className={styles.body} key={index}> 
//               <div className={styles.image}>
//                 <Image src={item.image} height="90" width="65" />
//               </div>
//               <p>{item.product}</p>
//               <p>$ {item.price}</p>
//               <p>{item.quantity}</p>
//               <div className={styles.buttons}>
//                 <button onClick={() => dispatch(incrementQuantity(item.id))}>
//                   +
//                 </button>
//                 <button onClick={() => dispatch(decrementQuantity(item.id))}>
//                   -
//                 </button>
//                 <button onClick={() => dispatch(removeFromCart(item.id))}>
//                   x
//                 </button>
//               </div>
//               <p>$ {item.quantity * item.price}</p>
//             </div>
//           ))}
//           {/* <h2>Grand Total: $ {getTotalPrice()}</h2> */}
//         </>
//       )}
//     </div>
//   );
// };

// export default CartPage;