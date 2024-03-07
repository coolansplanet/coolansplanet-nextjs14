//import ErrorBoundary from "components/ErrorBoundary";
import styles from "./Footer.module.scss";

const Footer = ({ text = "" }) => {
  return (
    // <ErrorBoundary>
    <div className={styles.footer}>{text}</div>
    //</ErrorBoundary>
  );
};

export default Footer;
