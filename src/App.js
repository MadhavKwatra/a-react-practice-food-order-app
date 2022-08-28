import React, { useState } from "react";
import Header from "./components/Header/Header";
import AvailableMeals from "./components/Meals/AvailableMeals/AvailableMeals";
import MealsSummary from "./components/Meals/MealsSummary/MealsSummary";
import Cart from "./components/Cart/Cart";

function App() {
  const [cart, setCart] = useState({});
  const [showCart, setShowCart] = useState(false);

  const cartClickHandler = () => {
    setShowCart(true);
  };

  const cancelHandler = () => {
    setShowCart(false);
  };
  return (
    <React.Fragment>
      <Header onClickCart={cartClickHandler} />
      <MealsSummary />
      <AvailableMeals />
      {showCart && <Cart onCancel={cancelHandler} />}
    </React.Fragment>
  );
}

export default App;
