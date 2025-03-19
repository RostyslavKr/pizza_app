import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";

export const Header = ({ pizza }) => {
  const [p, setPizza] = useState(pizza);
  const [totalCount, setTotalCount] = useState(0);
  const navigate = useNavigate();

  const goToMenu = () => {
    navigate("/#menu");
  };
  const goToAboutUs = () => {
    navigate("/#aboutus");
  };

  useEffect(() => {
    setPizza(pizza);
    setTotalCount(pizza.reduce((acc, obj) => acc + obj.count, 0));
  }, [pizza]);
  return (
    <header class="absolute w-screen bg-[#15181a7d]">
      <div class="flex justify-around content-center">
        <img
          src="./images/logo.png"
          alt="company logo"
          width={120}
          height={120}
        />
        <nav class="flex ">
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
        <div class="flex">
          {/* <button>
            <svg
              width="25px"
              height="25px"
              class="fill-white hover:fill-orange-700 duration-250 ease-in"
            >
              <use href="./images/sprite.svg#login"></use>
            </svg>
          </button> */}
          <Link to="/checkout">
            <div class="fixed lg:top-[15px] lg:right-[15px] md:top-[21px] md:right-[1px]  bg-[url(./images/icon-card-bg.png)] bg-cover bg-no-repeat bg-center flex  justify-center items-center lg:w-[100px] lg:h-[100px] md:w-[70px] md:h-[70px] z-3">
              <button class=" cursor-pointer">
                <svg
                  width="25px"
                  height="25px"
                  class="fill-white hover:fill-orange-700 duration-250 ease-in"
                >
                  <use href="./images/sprite.svg#shopping-basket"></use>
                </svg>
              </button>
              {p.length === 0 ? null : (
                <p class="absolute top-0 right-1.5 flex items-center justify-center rounded-full  h-7 w-7  bg-white font-semibold">
                  {totalCount}
                </p>
              )}
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};
