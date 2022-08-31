import styles from "./Cart.module.css";
import CartItem from "../CartItem/CartItem";
import Modal from "../UI/Modal/Modal";
import { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
const Cart = (props) => {
  const cartContextData = useContext(CartContext);

  const cartItemAddHandler = (item) => {
    cartContextData.addItem({ ...item, amount: 1 });
  };
  const cartItemRemoveHandler = (id) => {
    cartContextData.removeItem(id);
  };

  const { items } = cartContextData;
  const totalAmount = `$${cartContextData.totalAmount.toFixed(2)}`;
  const hasItems = cartContextData.items > 0;
  console.log(cartContextData.totalAmount, "Errror");
  const cartItems = items.map((cartItem) => (
    <CartItem
      key={cartItem.id}
      price={cartItem.price}
      name={cartItem.name}
      amount={cartItem.amount}
      onRemove={cartItemRemoveHandler.bind(null, cartItem.id)}
      // bind pre configures a function for future execution
      // basicall pre configures the arguments it will receive when its being executed
      onAdd={cartItemAddHandler.bind(null, cartItem)}
    />
  ));
  const orderHandler = () => {
    console.log("Ordering...");
    props.onClose();
  };

  return (
    <Modal onClose={props.onClose}>
      <ul className={styles["cart-items"]}>{cartItems}</ul>
      <div className={styles.total}>
        <h2>Total Amount</h2>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button onClick={props.onClose} className={styles["button--alt"]}>
          Close
        </button>
        {hasItems && (
          <button className={styles.button} onClick={orderHandler}>
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};
export default Cart;
