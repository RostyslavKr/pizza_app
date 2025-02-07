import { Link } from "react-router";
import { getMenu } from "../apiMenu";
export const Menu = () => {
  const menu = getMenu();
  return (
    <section>
      <div class="pb-20">
        <p class="font-menu font-bold text-5xl uppercase text-black pl-6 pt-6 pb-6">
          Pizza
        </p>
        <ul class=" grid grid-cols-3 grid-rows-2 gap-6 pl-6 pr-6">
          {menu.map((m, index) => (
            <li
              key={index}
              class="bg-white rounded-xl hover:shadow-xl hover:scale-[1.05] duration-250 ease-in "
            >
              <div>
                <Link to={`${m.id}`}>
                  <img class="rounded-t-[8px]" src={m.image} alt="pizza" />
                </Link>
              </div>
              <div class=" p-[12px] ">
                <div class="flex justify-between items-center">
                  <Link to={`${m.id}`}>
                    <p class="font-menu font-semibold text-lg text-black">
                      {m.title}
                    </p>
                  </Link>

                  <button class="hover:scale-[1.1] duration-400 ease-in">
                    <img
                      src="./images/buy.svg"
                      alt="buy"
                      width={60}
                      height={60}
                    />
                  </button>
                </div>
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
                    <input
                      type="radio"
                      name="size"
                      value="40"
                      class="hidden peer"
                    />
                    <span class="block px-4 py-2 rounded-full  peer-checked:bg-white peer-checked:shadow-md peer-checked:font-bold duration-300 ease-in-out">
                      40 см
                    </span>
                  </label>
                </form>

                <p class="font-menu font-medium text-base text-black pt-[6px]">
                  ${m.price}
                </p>
                <p class="font-menu ">{m.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
