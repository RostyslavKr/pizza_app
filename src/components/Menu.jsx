const menu = [
  {
    image: "./images/menu/kaprez.jpg",
    title: "Pizza with prosciutto",
    description: [
      "Neapolitan sauce, mozzarella cheese, prosciutto, cherry tomatoes, arugula, and Parmesan cheese.",
    ],
    price: "5.80",
  },
  {
    image: "./images/menu/ham.jpg",
    title: "Cheese pizza with bacon",
    description: [
      "Cream sauce, mozzarella cheese, Parmesan cheese, bacon, corn, feta cheese.",
    ],
    price: "5.40",
  },
  {
    image: "./images/menu/syrna-z-grusheyu-1.jpg",
    title: "Cheese pizza with pear",
    description: [
      "Cream sauce, mozzarella cheese, pear, Roquefort cheese, walnuts, Parmesan cheese.",
    ],
    price: "5.80",
  },
  {
    image: "./images/menu/peperoni.jpg",
    title: "Pepperoni pizza",
    description: ["Neapolitan sauce, mozzarella cheese, chorizo salami."],
    price: "5.30",
  },
  {
    image: "./images/menu/4-syry.jpg",
    title: "Four Cheese Pizza",
    description: [
      "Cream sauce, mozzarella cheese, Parmesan cheese, Roquefort cheese, marble cheese.",
    ],
    price: "6",
  },
  {
    image: "./images/menu/margaryta-1.jpg",
    title: "Margherita Pizza",
    description: ["Neapolitan sauce, mozzarella cheese, tomato."],
    price: "3.90",
  },
  {
    image: "./images/menu/czezara.jpg",
    title: "Caesar Pizza",
    description: [
      "Cream sauce, mozzarella cheese, Parmesan cheese, bacon, fried chicken, Caesar dressing, cherry tomatoes, iceberg lettuce.",
    ],
    price: "6.40",
  },
  {
    image: "./images/menu/kaprychoza.jpg",
    title: "Capricciosa Pizza",
    description: [
      "Neapolitan sauce, mozzarella cheese, ham, fresh mushrooms, olives, garlic oil with herbs.",
    ],
    price: "5.50",
  },
  {
    image: "./images/menu/nizhna.jpg",
    title: "Tender Pizza",
    description: [
      "Cream sauce, mozzarella cheese, tomato, ham, fresh mushrooms, Parmesan cheese.",
    ],
    price: "5.80",
  },
  {
    image: "./images/menu/1.web_smaki_maki.jpg",
    title: "Four Meats Pizza",
    description: [
      "Neapolitan sauce, mozzarella cheese, ham, bacon, Milano salami, hunter sausages.",
    ],
    price: "6.40",
  },
  {
    image: "./images/menu/gavajska.jpg",
    title: "Hawaiian Pizza",
    description: [
      "Neapolitan sauce, mozzarella cheese, ham, canned pineapples, corn, fried chicken.",
    ],
    price: "5.90",
  },
  {
    image: "./images/menu/napoli-2.jpg",
    title: "Napoli Pizza",
    description: [
      "Cream sauce, mozzarella cheese, tomato, Milano salami, arugula, feta cheese, balsamic dressing.",
    ],
    price: "5.60",
  },
  {
    image: "./images/menu/salyami.jpg",
    title: "Salami Pizza",
    description: ["Neapolitan sauce, mozzarella cheese, Milano salami."],
    price: "4.80",
  },
  {
    image: "./images/menu/inverno.jpg",
    title: "Inferno Pizza",
    description: [
      "Neapolitan sauce, mozzarella cheese, bacon, chili pepper, hunter sausages, chorizo salami, microgreens.",
    ],
    price: "6.50",
  },
  {
    image: "./images/menu/karbonara.jpg",
    title: "Carbonara Pizza",
    description: [
      "Cream sauce, mozzarella cheese, Parmesan cheese, chicken eggs, bacon, microgreens.",
    ],
    price: "6",
  },
  {
    image: "./images/menu/miks.jpg",
    title: "Mix Pizza",
    description: [
      "Neapolitan sauce, mozzarella cheese, ham, bell pepper, Parmesan cheese, corn, green onion, sweet and sour sauce.",
    ],
    price: "6.10",
  },
  {
    image: "./images/menu/z-myslyvskymy-kovbaskamy.jpg",
    title: "Pizza with hunter sausages",
    description: [
      "Neapolitan sauce, mozzarella cheese, hunter sausages, French mustard, red onion.",
    ],
    price: "5",
  },
  {
    image: "./images/menu/d_yavola.jpg",
    title: "Devil's Pizza",
    description: [
      "Neapolitan sauce, mozzarella cheese, spicy salami, chili pepper, Tabasco.",
    ],
    price: "5.60",
  },
  {
    image: "./images/menu/milano.jpg",
    title: "Milano Pizza",
    description: [
      "Neapolitan sauce, mozzarella cheese, ham, fresh mushrooms, Milano salami, Roquefort cheese, garlic oil with herbs.",
    ],
    price: "6",
  },
  {
    image: "./images/menu/bbq.jpg",
    title: "BBQ Pizza",
    description: [
      "Neapolitan sauce, mozzarella cheese, chorizo salami, red onion, pickled cucumbers, barbecue sauce.",
    ],
    price: "6.10",
  },
  {
    image: "./images/menu/grybna.jpg",
    title: "Mushroom Pizza",
    description: [
      "Mushroom sauce, mozzarella cheese, champignon mushrooms, shiitake mushrooms, Parmesan cheese, canned honey mushrooms, microgreens.",
    ],
    price: "5.50",
  },
  {
    image: "./images/menu/burger.jpg",
    title: "Burger Pizza",
    description: [
      "Neapolitan sauce, mozzarella cheese, bell pepper, bacon, red onion, fried chicken, burger sauce, iceberg lettuce.",
    ],
    price: "6.70",
  },
  {
    image: "./images/menu/picza-z-shynkoyu-ta-grybamy.jpg",
    title: "Pizza with Ham and Mushrooms",
    description: [
      "Neapolitan sauce, mozzarella cheese, ham, fresh mushrooms, garlic oil with herbs.",
    ],
    price: "5",
  },
  {
    image: "./images/menu/picza-z-krevetkamy-ta-lososem.jpg",
    title: "Pizza with Shrimp and Salmon",
    description: [
      "Cream sauce, mozzarella cheese, fresh Norwegian salmon, tiger shrimp, cherry tomatoes, Parmesan cheese, Provencal herbs, microgreens.",
    ],
    price: "6.60",
  },
  {
    image: "./images/menu/vegetar.picza-smnova.jpg",
    title: "Vegetarian Pizza",
    description: [
      "Neapolitan sauce, mozzarella cheese, tomato, fresh mushrooms, bell pepper, zucchini, garlic oil with herbs, microgreens, green beans.",
    ],
    price: "6.60",
  },
];

export const Menu = () => {
  return (
    <section>
      <div>
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
                <img class="rounded-t-[8px]" src={m.image} alt="pizza" />
              </div>
              <div class=" p-[12px] ">
                <div class="flex justify-between items-center">
                  <p class="font-menu font-semibold text-lg text-black">
                    {m.title}
                  </p>
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
