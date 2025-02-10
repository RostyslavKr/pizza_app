import React, { useState } from "react";
import { useParams } from "react-router";
import { getPizzaById } from "../apiMenu";
import { getIngredients } from "../apiIngredients";

export const PizzaDetails = () => {
  const [counter, setCounter] = useState(1);
  const { id } = useParams();
  const pizza = getPizzaById(id);
  const ingredients = getIngredients();
  const [price, setPrice] = useState(pizza.price);
  const [priceIngredient, setPriceIngredient] = useState(0);

  const handleClickInc = () => {
    setCounter(counter + 1);
  };

  const handleClickDecr = () => {
    if (counter === 1) {
      return;
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <div class="bg-white">
      <div class="flex">
        <img src={pizza.image} alt="pizza" width={400} height={400} />
        <div>
          <p>{pizza.title}</p>
          <p>{pizza.weight}g</p>
          <p>{pizza.description}</p>
          <form class="inline-flex items-center justify-around w-full bg-gray-100  rounded-full">
            <label class="block w-full cursor-pointer text-center">
              <input
                type="radio"
                name="size"
                value="30"
                class="hidden peer"
                checked
              />
              <span class="block px-4 py-2 rounded-full  peer-checked:bg-white peer-checked:shadow-md peer-checked:font-bold duration-300 ease-in-out">
                30 см
              </span>
            </label>
            <label class="block w-full cursor-pointer text-center">
              <input type="radio" name="size" value="40" class="hidden peer" />
              <span class="block px-4 py-2 rounded-full  peer-checked:bg-white peer-checked:shadow-md peer-checked:font-bold duration-300 ease-in-out">
                40 см
              </span>
            </label>
          </form>
          <div class="flex">
            <button>Add ingridients</button>
            <div class="flex items-center">
              <button onClick={handleClickInc}>+</button>
              <p>{counter}</p>
              <button onClick={handleClickDecr}>-</button>
            </div>
          </div>

          <div class="flex">
            <p>Ingridients: {priceIngredient}$</p>
            <p>Total: {price}$</p>
          </div>
          <button>Add to cart</button>
        </div>
      </div>
      <div>
        <p>Ingridients for pizza</p>
        <ul>
          {ingredients.map((i, index) => (
            <li key={index}>
              <img src={i.image} alt="ing" width={50} height={50} />
              <p>{i.name}</p>
              <p>{i.weight}</p>
              <p>{i.price}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
