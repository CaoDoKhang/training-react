import React, { useState, useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Items from "./components/Items/Items";
import Header from "./components/Layout/Header";
import CartProvider from "./store/CartProvider";
import { Route, Routes } from "react-router-dom";
import AddForm from "./components/Form/AddForm";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/dummy")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const onAddItemDataHandler = (itemData) => {
    setData((prev) => [...prev, itemData]);
    console.log(itemData);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Routes>
          <Route path="/products" element={<Items item={data} />} />
          <Route
            path="/add"
            element={<AddForm onAddItemData={onAddItemDataHandler} />}
          />
        </Routes>
      </main>
    </CartProvider>
  );
}

export default App;
