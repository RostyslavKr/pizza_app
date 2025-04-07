import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";

export const Header = ({ pizza }) => {
  const [p, setPizza] = useState(pizza);
  const [totalCount, setTotalCount] = useState(0);

  const navigate = useNavigate();

  // Update local pizza state and totalCount when pizza prop changes
  useEffect(() => {
    setPizza(pizza);
    setTotalCount(pizza.reduce((acc, obj) => acc + obj.count, 0));
  }, [pizza]);

  // Scroll to "menu" section
  const goToMenu = () => {
    navigate("/#menu");
  };

  // Scroll to "about us" section
  const goToAboutUs = () => {
    navigate("/#aboutus");
  };

  return (
    <header class="absolute w-screen bg-[#15181a7d]">
      <div class="px-2 flex md:justify-around content-center">
        <Link to="/">
          <img
            src="./images/logo.png"
            alt="company logo"
            width={120}
            height={120}
          />
        </Link>

        <nav class="hidden md:flex ">
          <ul class="flex w-lg justify-between justify-items-center items-center font-menu">
            <li class="text-white hover:text-orange-700 duration-250 ease-in hover:cursor-pointer">
              <Link to="/">
                <a class="uppercase font-bold text-xl">Home</a>
              </Link>
            </li>
            <li class="text-white hover:text-orange-700 duration-250 ease-in hover:cursor-pointer">
              <a onClick={goToAboutUs} class="uppercase font-bold text-xl">
                About Us
              </a>
            </li>
            <li class="text-white hover:text-orange-700 duration-250 ease-in hover:cursor-pointer">
              <Link to="/promotion">
                <a class="uppercase font-bold text-xl">Deals</a>
              </Link>
            </li>
            <li class="text-white hover:text-orange-700 duration-250 ease-in hover:cursor-pointer">
              <a onClick={goToMenu} class="uppercase font-bold text-xl">
                Menu
              </a>
            </li>
            <li class="text-white hover:text-orange-700 duration-250 ease-in hover:cursor-pointer">
              <Link to="/delivery">
                {" "}
                <a class="uppercase font-bold text-xl">Delivery</a>
              </Link>
            </li>
          </ul>
        </nav>
        <div class="flex ">
          <Link to="/checkout">
            <div class="fixed top-[21px] right-[15px] lg:top-[15px] lg:right-[15px] md:top-[21px] md:right-[1px]  bg-[url(/images/icon-card-bg.png)] bg-cover bg-no-repeat bg-center flex  justify-center items-center w-[75px] h-[75px] lg:w-[100px] lg:h-[100px] md:w-[70px] md:h-[70px] z-3">
              <button class=" cursor-pointer">
                <svg
                  width="25px"
                  height="25px"
                  class="fill-white hover:fill-orange-700 duration-250 ease-in"
                >
                  <use href="/images/sprite.svg#shopping-basket"></use>
                </svg>
              </button>
              {p.length === 0 ? null : (
                <p class="absolute top-0 right-1.5 flex items-center justify-center rounded-full  h-6 w-6 md:h-7 md:w-7  bg-white font-semibold">
                  {totalCount}
                </p>
              )}
            </div>
          </Link>
          <Link to="/modal">
            <div class="md:hidden absolute top-[36px] left-[65%]  cursor-pointer">
              <img
                src="/images/pizza-icon.png"
                alt="pizza-icon"
                width={40}
                height={40}
              />
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};
