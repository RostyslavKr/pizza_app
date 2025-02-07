export const PizzaDetails = () => {
  return (
    <div>
      <div>
        <img />
        <div>
          <p>pizza name</p>
          <p>pizza description</p>
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
              <input type="radio" name="size" value="40" class="hidden peer" />
              <span class="block px-4 py-2 rounded-full  peer-checked:bg-white peer-checked:shadow-md peer-checked:font-bold duration-300 ease-in-out">
                40 см
              </span>
            </label>
          </form>
        </div>
        <div>
          <button>Add ingridients</button>
          <div>
            {" "}
            <span>+</span> <input type="text" maxlength="3" value="1" />{" "}
            <span>-</span>
          </div>
          <div>
            <p>Ingridients:</p>
            <p>Total:</p>
          </div>
          <button>Add to cart</button>
        </div>
      </div>
      <div>
        <p>Ingridients for pizza</p>
        <ul>
          <li>
            <img />
            <p>name</p>
            <p>weight</p>
            <p>cost</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
