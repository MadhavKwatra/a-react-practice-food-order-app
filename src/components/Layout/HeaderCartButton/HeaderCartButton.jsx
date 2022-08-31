import styles from "./HeaderCartButton.module.css";
import CartIcon from "../../UI/CartIcon/CartIcon";
import CartContext from "../../../store/cart-context";
import { useContext, useEffect, useState } from "react";
const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  // const totalCartItems = useContext(CartContext).items.length;
  // this doesn't get the total items as we have amount in individual cart Item, we need to add it

  const cartContextData = useContext(CartContext);
  const { items } = cartContextData;
  const totalCartItems = items.reduce((curNumber, item) => {
    return curNumber + +item.amount;
    // converting to number
  }, 0);

  const btnClasses = `${styles.button}  ${btnIsHighlighted ? styles.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    // change when items lenght change or atleast 1
    setBtnIsHighlighted(true);

    // Reset (remove the bump class)
    const identifer = setTimeout(() => {
      setBtnIsHighlighted(false);
      console.log("resetted ");
    }, 300);
    // 300 is the duration of the animation too

    // cleanup in case component is removed
    // also reset the timer if user rapidly adds items
    return () => {
      console.log("ran");
      clearTimeout(identifer);
    };
  }, [items]);

  return (
    <button onClick={props.onClick} className={btnClasses}>
      <CartIcon className={styles.icon} />
      Your Cart
      <span className={styles.badge}>{totalCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
