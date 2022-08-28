import styles from "./MealItem.module.css";
import MealItemForm from "../MealItemForm/MealItemForm";
const MealItem = (props) => {
  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.title}</h3>
        <p className={styles.description}>{props.description}</p>
        <span className={styles.price}>${props.price}</span>
      </div>
      <MealItemForm />
    </li>
  );
};

export default MealItem;
