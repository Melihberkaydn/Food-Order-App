import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartContextProvider from "./store/CartProvider";

function App() {
  const [isCartShown, setIsCartShown] = useState(false);

  const showCartHandler = () => {
    setIsCartShown(true);
  };

  const hideCartHandler = () => {
    setIsCartShown(false);
  };

  return (
    <CartContextProvider>
      {isCartShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler}></Header>
      <main>
        <Meals />
      </main>
    </CartContextProvider>
  );
}

export default App;
