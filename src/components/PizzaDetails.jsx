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
      <div class="flex justify-around gap-4 m-auto w-[80%] pt-38">
        <img src={pizza.image} alt="pizza" width={450} height={450} />
        <div>
          <p class="text-4xl font-semibold pb-[10px]">{pizza.title}</p>
          <p>{pizza.weight}g</p>
          <p class="text-lg font-medium tracking-wide pb-[10px]">
            {pizza.description}
          </p>
          <form class="inline-flex items-center justify-around w-[80%] bg-gray-100  rounded-full">
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
          <div class="flex gap-16 pb-[20px] pt-[20px]">
            <button class="rounded-xl shadow-md bg-[#C74C33] text-white hover:scale-105 duration-200 ease-in p-2 text-xl font-semibold tracking-wide">
              Add ingridients
            </button>
            <div class="flex items-center">
              <button class="text-2xl font-bold" onClick={handleClickInc}>
                <svg
                  width={25}
                  height={25}
                  class="stroke-black hover:stroke-orange-700 duration-250 ease-in"
                >
                  <use href="./images/sprite.svg#plus"></use>
                </svg>
              </button>
              <p class=" text-xl rounded-sm border border-black p-2 mr-2 ml-2">
                {counter}
              </p>
              <button class="text-2xl font-bold" onClick={handleClickDecr}>
                <svg
                  width={25}
                  height={25}
                  class="stroke-black hover:stroke-orange-700 duration-250 ease-in"
                >
                  {" "}
                  <use href="./images/sprite.svg#minus"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="flex gap-16 pb-[50px]">
            <p class="text-2xl font-medium">
              Ingridients:{" "}
              <span class="text-3xl font-bold">{priceIngredient}$</span>
            </p>
            <p class="text-2xl font-medium">
              Total: <span class="text-3xl font-bold">{price}$</span>
            </p>
          </div>
          <button class="rounded-xl shadow-md bg-[#C74C33] text-white hover:scale-105 duration-200 ease-in p-2 text-xl font-semibold tracking-wide">
            Add to cart
          </button>
        </div>
      </div>
      <div class="pb-20">
        <p class="text-center text-4xl font-bold pt-28 pb-16">
          Ingridients for pizza
        </p>
        <ul class="grid grid-row-3 grid-cols-6 gap-x-8 gap-y-20 px-[30px]">
          {ingredients.map((i, index) => (
            <li key={index} class="px-[10px]">
              <div class="flex justify-center items-center">
                <img src={i.image} alt="ing" width={100} height={100} />
              </div>

              <p class="text-center text-base font-bold">{i.name}</p>
              <div class="flex justify-between items-center">
                <p>{i.weight}g</p>
                <p>{i.price}$</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
