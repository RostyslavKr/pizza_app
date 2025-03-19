import { useEffect } from "react";
import { useLocation } from "react-router";
import { PizzaItem } from "./PizzaItem";
import { getMenu } from "../../apiMenu";
export const Menu = ({ addToCart }) => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#menu") {
      const menuSection = document.getElementById("menu");
      if (menuSection) {
        menuSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  const menu = getMenu();
  return (
    <section>
      <div class="pb-20">
        <p class="font-menu font-bold text-5xl uppercase text-black pl-6 pt-6 pb-6">
          Pizza
        </p>
        <ul
          id="menu"
          class=" flex flex-col md:grid md:grid-cols-3 md:grid-rows-2 gap-6 pl-6 pr-6"
        >
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
