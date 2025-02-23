import { PizzaItem } from "./PizzaItem";
import { getMenu } from "../../apiMenu";
export const Menu = ({ addToCart }) => {
  const menu = getMenu();
  return (
    <section>
      <div class="pb-20">
        <p class="font-menu font-bold text-5xl uppercase text-black pl-6 pt-6 pb-6">
          Pizza
        </p>
        <ul class=" grid grid-cols-3 grid-rows-2 gap-6 pl-6 pr-6">
          {menu.map((m, index) => (
            <PizzaItem
              key={index}
              id={m.id}
              image={m.image}
              title={m.title}
              description={m.description}
              price={m.price}
              weight={m.weight}
              addToCart={addToCart}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};
