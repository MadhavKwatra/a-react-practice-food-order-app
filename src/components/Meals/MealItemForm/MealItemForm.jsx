import styles from "./MealItemForm.module.css";
import { useState } from "react";
import Input from "../../UI/Input/Input";
const MealItemForm = (props) => {
  const [amount, setAmount] = useState(0);
  const submitFormHandler = (event) => {
    event.preventDefault();
  };
  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  };

  const incrementAmount = () => {
    setAmount((prevAmount) => {
      return +prevAmount + 1;
    });
  };
  return (
    <form className={styles.form} onSubmit={submitFormHandler}>
      <Input
        type="number"
        onChange={amountChangeHandler}
        value={amount}
        label="Amount"
        id="amount"
      />
      <button onClick={incrementAmount}>+ Add</button>
    </form>
  );
};

export default MealItemForm;
