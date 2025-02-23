import { useState, useEffect } from "react";

export const Checkout = ({ removePizzaFromCart, pizza }) => {
  const [pizzas, setPizzas] = useState(pizza);

  useEffect(() => {
    setPizzas(pizza);
  }, [pizza]);

  return (
    <div class="pt-38">
      {pizzas.length === 0 ? (
        <div>
          <p>Empty card</p>
        </div>
      ) : (
        <ul>
          {pizzas.map(({ id, image, title, price, weight, size }) => (
            <li key={id}>
              <img src={image} alt="pizza" width={450} height={450} />

              <p class="text-4xl font-semibold pb-[10px]">{title}</p>
              <p>{price.toFixed(2)}$</p>
              <p>{weight}g</p>
              <p>{size}cm</p>
              <button onClick={() => removePizzaFromCart(id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
