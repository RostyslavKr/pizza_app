import React, { useState } from "react";
import { Link } from "react-router";

export const PizzaItem = ({
  id,
  image,
  title,
  description,
  price,
  weight,
  addToCart,
}) => {
  const pricePizza = parseFloat(price);
  const [size, setSize] = useState(30);
  const [counter, setCounter] = useState(1);
  const calculatedPrice = size === 30 ? pricePizza : pricePizza * 1.5;
  const calculatedWeight = size === 30 ? weight : weight * 1.7;

  return (
    <li class="bg-white rounded-xl hover:shadow-xl hover:scale-[1.05] duration-250 ease-in ">
      <div>
        <Link to={`${id}`}>
          <img class="rounded-t-[8px]" src={image} alt="pizza" />
        </Link>
      </div>
      <div class=" p-[12px] ">
        <div class="flex justify-between items-center">
          <Link to={`${id}`}>
            <p class="font-menu font-semibold text-lg text-black">{title}</p>
          </Link>

          <button
            class="hover:scale-[1.1] duration-400 ease-in cursor-pointer"
            onClick={() =>
              addToCart(
                id,
                image,
                title,
                calculatedPrice,
                size,
                calculatedWeight,
                counter
              )
            }
          >
            <img src="./images/buy.svg" alt="buy" width={60} height={60} />
          </button>
        </div>
        <form class="inline-flex items-center justify-around w-full bg-gray-100  rounded-full">
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

        <p class="font-menu font-medium text-base text-black pt-[6px]">
          ${calculatedPrice.toFixed(2)}
        </p>
        <p class="font-menu ">{description}</p>
      </div>
    </li>
  );
};
