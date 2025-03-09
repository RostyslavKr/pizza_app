import { useState, useEffect } from "react";

export const Checkout = ({ removePizzaFromCart, pizza }) => {
  const [pizzas, setPizzas] = useState(pizza);

  useEffect(() => {
    setPizzas(pizza);
  }, [pizza]);

  return (
    <div class="pt-33 pb-12">
      {pizzas.length === 0 ? (
        <div class="flex flex-col justify-center items-center">
          <img
            src="./images/bg-emptycart.png"
            alt="empty-cart"
            width={300}
            height={100}
          />
          <p class="font-bold text-2xl">Your cart is empty</p>
          <p class="font-medium text-xl text-gray-600 w-[35%] text-center">
            Looks like you have not added anything to your cart.
          </p>
          <p class="font-medium text-xl text-gray-600 w-[35%] text-center">
            Go ahead & order best pizza.
          </p>
        </div>
      ) : (
        <ul class="flex-col grid gap-3">
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

 bg-white w-[70%] m-auto p-[15px] hover:scale-[1.02] duration-250 ease-in"
                key={id}
              >
                <div class="flex">
                  <img src={image} alt="pizza" width={150} height={150} />

                  <div class="pl-[20px]">
                    <p class="text-4xl font-semibold pb-[10px]">{title}</p>
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
                          <p class="grid grid-row-3 grid-cols-7 gap-3 text-centre">
                            <span class="font-semibold">Ingridients:</span>
                            {chosenIngredient.map((i, index) => (
                              <span key={index}>{i}</span>
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
      )}
    </div>
  );
};
