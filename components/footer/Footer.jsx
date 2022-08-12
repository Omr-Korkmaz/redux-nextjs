import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
     <span className={styles.brand}>Sample Redux Shoping Cart</span>{' '}
      {new Date().getFullYear()}
    </footer>
  );
};


export default Footer;