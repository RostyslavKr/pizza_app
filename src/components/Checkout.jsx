import { useState, useEffect } from "react";
import { Link } from "react-router";

export const Checkout = ({ removePizzaFromCart, pizza }) => {
  const [pizzas, setPizzas] = useState(pizza);
  const [totalCost, setTotalCost] = useState(() => {
    const savedData = localStorage.getItem("totalCostOrder");
    return savedData ? JSON.parse(savedData) : 0;
  });

  // Update local pizzas and total cost whenever the `pizza` prop changes
  useEffect(() => {
    setPizzas(pizza);
    const newTotalCost = pizza.reduce((acc, obj) => acc + obj.price, 0);
    setTotalCost(newTotalCost);
  }, [pizza]);

  // Save total cost to localStorage or remove it if the cost is zero
  useEffect(() => {
    if (totalCost === 0) {
      localStorage.removeItem("totalCostOrder");
    } else {
      localStorage.setItem("totalCostOrder", JSON.stringify(totalCost));
    }
  }, [totalCost]);

  return (
    <div class="pt-36 pb-12">
      {pizzas.length === 0 ? (
        <div class="flex flex-col justify-center items-center p-2">
          <img
            src="/images/bg-emptycart.png"
            alt="empty-cart"
            width={300}
            height={100}
          />
          <p class="font-bold text-2xl">Your cart is empty</p>
          <p class="font-medium text-xl text-gray-600 md:w-[35%] text-center">
            Looks like you have not added anything to your cart.
          </p>
          <p class="font-medium text-xl text-gray-600 md:w-[35%] text-center">
            Go ahead & order best pizza.
          </p>
        </div>
      ) : (
        <div class=" m-auto">
          <ul class="flex-col grid gap-3 px-5">
            {pizzas.map(
              ({
                id,
                image,
                title,
                price,
                weight,
                size,
                count,
                chosenIngredient,
              }) => (
                <li
                  class=" flex justify-between rounded-md shadow-md

 bg-white md:w-[70%] m-auto p-[15px] hover:scale-[1.02] duration-250 ease-in"
                  key={id}
                >
                  <div class="flex">
                    <img
                      src={image}
                      alt="pizza"
                      class="min-w-[150px]  h-fit"
                      width={150}
                      height={150}
                    />

                    <div class="pl-[20px]">
                      <p class="text-3xl md:text-4xl font-semibold pb-[10px]">
                        {title}
                      </p>
                      <div class="flex justify-between gap-[10px]">
                        <div>
                          <p>
                            <span class="font-semibold">Cost:</span>{" "}
                            {price.toFixed(2)}$
                          </p>
                          <p>
                            <span class="font-semibold">Weight:</span> {weight}g
                          </p>
                          <p>
                            <span class="font-semibold">Size:</span> {size}cm
                          </p>
                          {count === 1 ? null : (
                            <p>
                              <span class="font-semibold">Count:</span> {count}
                            </p>
                          )}
                        </div>
                        {chosenIngredient.length === 0 ? null : (
                          <div>
                            <p class="grid grid-row-3 grid-cols-1 lg:grid-cols-5 gap-1 text-centre">
                              <span class="font-semibold ">Ingredients:</span>
                              {chosenIngredient.map((i, index) => (
                                <span key={index} class="text-sm">
                                  {i}
                                </span>
                              ))}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <button
                    class="self-start cursor-pointer"
                    onClick={() => removePizzaFromCart(id)}
                  >
                    <svg
                      class="fill-red-500 hover:scale-[1.1] duration-250 ease-in"
                      width="25px"
                      height="25px"
                    >
                      <use href="/images/sprite.svg#cancel"></use>
                    </svg>
                  </button>
                </li>
              )
            )}
          </ul>
          <div class="flex justify-around items-center pt-[15px]">
            <p class="font-bold text-2xl">
              Total cost: {totalCost.toFixed(2)}$
            </p>
            <Link to="/order">
              <button class="rounded-md bg-[#C74C33] text-white py-3 w-[163px] hover:scale-[1.1] hover:bg-[#a7402c] duration-400 ease-in cursor-pointer">
                Order
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
