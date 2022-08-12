import Navbar from "../navbar/Navbar"
import Footer from "../footer/Footer";
import styles from './layout.module.scss'

const Layout = ({ children }) => {
  return (
    <div>
 
      <Navbar />
     <div className={styles.content}>
        { children }
       </div>
      <Footer />
    </div>
  );
}
 
export default Layout;