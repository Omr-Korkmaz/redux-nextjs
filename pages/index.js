import ProductCard from '../components/ProductCard/ProductCard';
import styles from '../styles/Home.module.css';
// import { getProducts } from './api/products/index';
import data from './api/data.json';
import { useSelector, useDispatch } from "react-redux";





const HomePage = ({products}) => {
 
 


    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Landscape Book Shop</h1>
        <div className={styles.cards}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      </div>
    );
  
};

function getProducts() {
  // const { cartItems } = useSelector((state) => state.cart); // try to fix the problem....

  // return cartItems;
  return data;
}

export default HomePage;

export async function getStaticProps() {
  const products = await getProducts();
  return { props: { products } };
}

