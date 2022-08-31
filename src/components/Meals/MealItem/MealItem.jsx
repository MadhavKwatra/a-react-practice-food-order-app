import styles from "./MealItem.module.css";
import MealItemForm from "../MealItemForm/MealItemForm";
import CartContext from "../../../store/cart-context";
import { useContext } from "react";
const MealItem = (props) => {
  const cartContextData = useContext(CartContext);
  const addToCartHandler = (amount) => {
    const cartItem = {
      id: props.id,
      price: props.price,
      amount: amount,
      name: props.name,
    };
    cartContextData.addItem(cartItem);
  };

  // render 2 decimal places only
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <p className={styles.description}>{props.description}</p>
        <span className={styles.price}>{price}</span>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} id={props.id} />
      </div>
    </li>
  );
};

export default MealItem;
