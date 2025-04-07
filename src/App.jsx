import { useState, useEffect } from "react";
import { Route, Routes } from "react-router";
import { MainPage } from "./pages/MainPage";
import { PizzaDetailsPage } from "./pages/PizzaDetailsPage";
import { CheckoutPage } from "./pages/CheckoutPage";
import { PromotionPage } from "./pages/PromotionPage";
import { DeliveryPage } from "./pages/DeliveryPage";
import { OrderPage } from "./pages/OrderPage";
import { ModalPage } from "./pages/ModalPage";

function App() {
  const [pizza, setPizza] = useState([]);

  // Load pizza data from localStorage when the component mounts
  useEffect(() => {
    const savedData = localStorage.getItem("orderData");
    if (savedData) {
      setPizza(JSON.parse(savedData));
    }
  }, []);

  // Save pizza data to localStorage whenever it changes
  useEffect(() => {
    if (pizza.length === 0) {
      localStorage.removeItem("orderData");
    } else {
      localStorage.setItem("orderData", JSON.stringify(pizza));
    }
  }, [pizza]);

  // Function to add a pizza to the cart
  const addToCart = (
    id,
    image,
    title,
    price,
    size,
    weight,
    count,
    chosenIngredient
  ) => {
    const addedPizza = {
      id: id,
      image: image,
      title: title,
      price: parseFloat(price),
      size: size,
      weight: weight,
      count: count,
      chosenIngredient: chosenIngredient,
    };
    const foundSimilarPizza = pizza.find((p) => p.id === id);

    if (foundSimilarPizza) {
      return;
    } else {
      setPizza((prevPizza) => [...prevPizza, addedPizza]);
    }
  };

  // Function to remove a pizza from the cart by ID
  const removePizzaFromCart = (id) => {
    setPizza((prevPizza) => prevPizza.filter((p) => p.id !== id));
  };

  // Function to clear the entire order and localStorage
  const removeOrder = () => {
    setPizza([]);
    localStorage.clear();
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<MainPage addToCart={addToCart} pizza={pizza} />}
        />
        <Route
          path="/:id"
          element={<PizzaDetailsPage addToCart={addToCart} pizza={pizza} />}
        />
        <Route
          path="/checkout"
          element={
            <CheckoutPage
              removePizzaFromCart={removePizzaFromCart}
              pizza={pizza}
            />
          }
        />
        <Route path="/promotion" element={<PromotionPage pizza={pizza} />} />
        <Route path="/delivery" element={<DeliveryPage pizza={pizza} />} />
        <Route
          path="/order"
          element={<OrderPage pizza={pizza} removeOrder={removeOrder} />}
        />
        <Route path="/modal" element={<ModalPage />} />
      </Routes>
    </>
  );
}

export default App;
