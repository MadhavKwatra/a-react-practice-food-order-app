import styles from "./MealItemForm.module.css";
import { useState, useRef } from "react";
import Input from "../../UI/Input/Input";
const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);

  const amountInputRef = useRef();
  const submitFormHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    // inputRef.current contains the input element , .value is the value of input

    // input value is always a string
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <form className={styles.form} onSubmit={submitFormHandler}>
      <Input
        // this ref will be the ref in the props,(ref //this one)
        ref={amountInputRef}
        input={{
          type: "number",

          // all inputs have the same id , a bug
          id: "amount_" + props.id,
          min: "-10",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
        label="Amount"
      />
      <button type="submit">+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
