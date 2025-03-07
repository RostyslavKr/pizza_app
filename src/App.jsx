import { useState, useEffect } from "react";
import { Route, Routes } from "react-router";
import { MainPage } from "./pages/MainPage";
import { PizzaDetailsPage } from "./pages/PizzaDetailsPage";
import { CheckoutPage } from "./pages/CheckoutPage";

function App() {
  const [pizza, setPizza] = useState([]);
  console.log("pizza", pizza);

  useEffect(() => {
    const savedData = localStorage.getItem("orderData");
    if (savedData) {
      setPizza(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    if (pizza.length === 0) {
      localStorage.removeItem("orderData");
    } else {
      localStorage.setItem("orderData", JSON.stringify(pizza));
    }
  }, [pizza]);

  const addToCart = (id, image, title, price, size, weight, count) => {
    const addedPizza = {
      id: id,
      image: image,
      title: title,
      price: parseFloat(price),
      size: size,
      weight: weight,
      count: count,
    };
    const foundSimilarPizza = pizza.find((p) => p.id === id);

    if (foundSimilarPizza) {
      return;
    } else {
      setPizza((prevPizza) => [...prevPizza, addedPizza]);
    }
  };

  const removePizzaFromCart = (id) => {
    setPizza((prevPizza) => prevPizza.filter((p) => p.id !== id));
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
      </Routes>
    </>
  );
}

export default App;
