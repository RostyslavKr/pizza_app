import React, { useState } from "react";
import { useParams } from "react-router";
import { getPizzaById } from "../utils/apiMenu";
import { getIngredients } from "../utils/apiIngredients";

export const PizzaDetails = ({ addToCart }) => {
  const [counter, setCounter] = useState(1);
  const [size, setSize] = useState(30);
  const [chosenIngredient, setChosenIngredient] = useState([]);
  const { id } = useParams();
  const pizza = getPizzaById(id);
  const ingredients = getIngredients();
  const [price, setPrice] = useState(parseFloat(pizza.price));
  const [weight, setWeight] = useState(parseFloat(pizza.weight));
  const [priceIngredient, setPriceIngredient] = useState(0);
  const calculatedPrice = size === 30 ? price : price * 1.5;
  const calculatedWeight = size === 30 ? weight : weight * 1.7;
  const totalPrice = (calculatedPrice + priceIngredient) * counter;

  // Function to handle selecting and deselecting ingredients
  const handleChosenIngredient = (ingredient) => {
    setChosenIngredient((prevChosen) =>
      prevChosen.includes(ingredient.name)
        ? prevChosen.filter((i) => i !== ingredient.name)
        : [...prevChosen, ingredient.name]
    );

    // Adjust the price based on whether the ingredient is being added or removed
    setPriceIngredient((prevIng) =>
      chosenIngredient.includes(ingredient.name)
        ? parseFloat(prevIng) - parseFloat(ingredient.price)
        : parseFloat(prevIng) + parseFloat(ingredient.price)
    );

    // Adjust the base price of the pizza based on the ingredient selection
    setPrice((prevPrice) =>
      chosenIngredient.includes(ingredient.name)
        ? parseFloat(prevPrice) - parseFloat(ingredient.price)
        : parseFloat(prevPrice) + parseFloat(ingredient.price)
    );

    // Adjust the weight of the pizza based on the ingredient selection
    setWeight((prevWeight) =>
      chosenIngredient.includes(ingredient.name)
        ? parseFloat(prevWeight) - parseFloat(ingredient.weight)
        : parseFloat(prevWeight) + parseFloat(ingredient.weight)
    );
  };

  // Function to increment the pizza quantity by 1
  const handleClickInc = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  // Function to decrement the pizza quantity by 1, with a minimum of 1 pizza
  const handleClickDecr = () => {
    if (counter > 1) {
      setCounter((prevCounter) => prevCounter - 1);
    }
  };

  return (
    <div class="bg-white ">
      <div class="flex flex-col  md:flex-row justify-around gap-4 mx-auto w-[80%] pt-38">
        <img
          src={pizza.image}
          alt="pizza"
          class="w-[300px] h-[300px] lg:w-[450px] lg:h-[450px]"
        />
        <div>
          <p class="text-4xl font-semibold pb-[10px]">{pizza.title}</p>
          <p>{calculatedWeight}g</p>
          <p class="text-lg font-medium tracking-wide pb-[10px]">
            {pizza.description}
          </p>
          <form class="inline-flex  items-center justify-around w-[80%] bg-gray-100  rounded-full">
            <label class="block w-full cursor-pointer text-center">
              <input
                type="radio"
                name="size"
                value="30"
                class="hidden peer"
                checked={size === 30}
                onChange={() => setSize(30)}
              />
              <span class="block px-4 py-2 rounded-full  peer-checked:bg-white peer-checked:shadow-md peer-checked:font-bold duration-300 ease-in-out">
                30 см
              </span>
            </label>
            <label class="block w-full cursor-pointer text-center">
              <input
                type="radio"
                name="size"
                value="40"
                class="hidden peer"
                checked={size === 40}
                onChange={() => setSize(40)}
              />
              <span class="block px-4 py-2 rounded-full  peer-checked:bg-white peer-checked:shadow-md peer-checked:font-bold duration-300 ease-in-out">
                40 см
              </span>
            </label>
          </form>
          <div class="flex gap-16 pb-[20px] pt-[20px]">
            <a
              href="#ingridients"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("ingridients")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              class="rounded-xl  shadow-md bg-[#C74C33] text-white hover:scale-105 duration-200 ease-in p-2 text-xl text-center font-semibold"
            >
              Add ingredients
            </a>
            <div class="flex items-center">
              <button
                class="text-2xl font-bold cursor-pointer"
                onClick={handleClickInc}
              >
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
              <button
                class="text-2xl font-bold cursor-pointer"
                onClick={handleClickDecr}
              >
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

          <div class="flex gap-16 pb-[20px]">
            <p class="text-2xl font-medium">
              Ingredients:{" "}
              <span class="text-3xl font-bold">
                {priceIngredient === 0 ? 0 : priceIngredient.toFixed(2)}$
              </span>
            </p>
            <p class="text-2xl font-medium">
              Total:{" "}
              <span class="text-3xl font-bold">{totalPrice.toFixed(2)}$</span>
            </p>
          </div>
          {chosenIngredient.length === 0 ? null : (
            <ul class="grid grid-row-3 grid-cols-3 lg:grid-cols-7 pb-[20px]">
              {chosenIngredient.map((i, index) => (
                <li key={index}>
                  <p class="font-semibold text-center">{i}</p>
                </li>
              ))}
            </ul>
          )}
          <button
            class="rounded-xl shadow-md bg-[#C74C33] text-white hover:scale-105 duration-200 ease-in p-2 text-xl font-semibold tracking-wide cursor-pointer"
            onClick={() =>
              addToCart(
                pizza.id,
                pizza.image,
                pizza.title,
                totalPrice,
                size,
                calculatedWeight,
                counter,
                chosenIngredient
              )
            }
          >
            Add to cart
          </button>
        </div>
      </div>
      <div class="pb-20">
        <p id="ingridients" class="text-center text-4xl font-bold pt-28 pb-16 ">
          Ingredients for pizza
        </p>
        <form class="grid grid-row-3 grid-cols-2 lg:grid-cols-6 gap-x-8 gap-y-15 px-[30px]">
          {ingredients.map((i, index) => (
            <label key={index} onChange={() => handleChosenIngredient(i)}>
              <input
                type="checkbox"
                name="ingridients"
                value={i.name}
                class="hidden peer"
              />
              <div class="p-[15px] rounded-md hover:outline-3 hover:outline-orange-700 transition-all duration-250 peer-checked:outline-orange-700 peer-checked:outline-3  cursor-pointer">
                <div class="flex justify-center items-center ">
                  <img src={i.image} alt="ing" width={100} height={100} />
                </div>

                <p class="text-center text-base font-bold">{i.name}</p>
                <div class="flex justify-between items-center">
                  <p>{i.weight}g</p>
                  <p>{i.price}$</p>
                </div>
              </div>
            </label>
          ))}
        </form>
      </div>
    </div>
  );
};
