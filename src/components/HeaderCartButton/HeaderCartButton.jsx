import styles from "./HeaderCartButton.module.css";
import CartIcon from "../UI/CartIcon/CartIcon";

const HeaderCartButton = (props) => {
  return (
    <button
      onClick={props.onClickCart}
      className={`${styles.button} ${props.isBump ? styles.bump : ""}`}
    >
      <CartIcon className={styles.icon} />
      Your Cart
      <span className={styles.badge}>2</span>
    </button>
  );
};

export default HeaderCartButton;
