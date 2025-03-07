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
        <ul>
          {pizzas.map(({ id, image, title, price, weight, size, count }) => (
            <li key={id}>
              <img src={image} alt="pizza" width={450} height={450} />

              <p class="text-4xl font-semibold pb-[10px]">{title}</p>
              <p>{price.toFixed(2)}$</p>
              <p>{weight}g</p>
              <p>{size}cm</p>
              {count === 1 ? null : <p>{count}</p>}
              <button onClick={() => removePizzaFromCart(id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
