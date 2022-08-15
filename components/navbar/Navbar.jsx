import Link from 'next/link';
import { useSelector } from 'react-redux';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useState} from 'react'
import styles from './navbar.module.css'

const Navbar = () => {
  const cart = useSelector((state) => state.cart);

  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };



    const [click, setClick] = useState(false);
  
    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);
    
    return (
 
       <div className={click ? styles.mainContainer : ""}  onClick={()=>Close()} >
        <nav className={styles.navbar} onClick={e => e.stopPropagation()}>
          <div className={styles.navbar__container}>
          <Link href="/"
          >
            <a className={styles.navbar__logo}>LOGO</a>
            
            </Link>
          
            <ul className={click ? `${styles.navbar__menu} ${styles.active}` : styles.navbar__menu}>
              <li className={styles.navbar__item}>
                <Link
                  href="/"
                 
                >
                 <a  className={styles.navbar__links}> Home</a>
                </Link>
              </li>
              <li className={styles.navbar__item}>
                <Link
                
                  href="/about"
                 
                >
                   <a  className={styles.navbar__links}> About</a>
                </Link>
              </li>
              <li className={styles.navbar__item}>

                <Link
                
                  href="/cart"
               
                 
                >
                    <a  className={styles.navbar__links}>Cart
                   < ShoppingCartIcon /> ({getItemsCount()})</a>
              
                </Link>
              </li>
             
            </ul>
            <div className={styles.navbar__icon} onClick={handleClick}>
              {click ? <CloseIcon /> : <MenuIcon /> }
            </div>
          </div>
        </nav>
      </ div>
    );
  
};

export default Navbar;