import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      Copyright <span className={styles.brand}>SAMPLE REDUX</span>{' '}
      {new Date().getFullYear()}
    </footer>
  );
};

export default Footer