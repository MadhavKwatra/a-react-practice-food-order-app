import styles from "./Cart.module.css";
import CartItem from "../CartItem/CartItem";
import Modal from "../UI/Modal/Modal";
import { useState } from "react";
const Cart = (props) => {
  const [amount, setAmount] = useState(4);
  const onAdd = () => {
    setAmount((prevAmt) => {
      return prevAmt + 1;
    });
  };
  const onRemove = () => {
    setAmount((prevAmt) => {
      return prevAmt - 1;
    });
  };

  const orderHandler = () => {
    console.log("Ordering...");
    props.onCancel();
  };

  return (
    <Modal onConfirm={props.onCancel}>
      <ul className={styles["cart-items"]}>
        <CartItem
          price={123.4324}
          name="Rajma Chawal"
          amount={amount}
          onRemove={onRemove}
          onAdd={onAdd}
        />
      </ul>
      <div className={styles.total}>
        <h2>Total Amount</h2>
        <span>$23423</span>
      </div>
      <div className={styles.actions}>
        <button onClick={props.onCancel} className={styles["button--alt"]}>
          Cancel
        </button>
        <button className={styles.button} onClick={orderHandler}>
          Order
        </button>
      </div>
    </Modal>
  );
};
export default Cart;
