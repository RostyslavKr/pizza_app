import { Link, useNavigate } from "react-router";

export const Modal = () => {
  const navigate = useNavigate();

  const goToMenu = () => {
    navigate("/#menu");
  };
  const goToAboutUs = () => {
    navigate("/#aboutus");
  };

  return (
    <div class="flex flex-col  bg-[#1E1E1E] h-screen px-4">
      <div class="flex justify-between items-center pb-10">
        <Link to="/">
          <img
            src="./images/logo.png"
            alt="company logo"
            width={120}
            height={120}
          />
        </Link>

        <Link to="/">
          <button class="cursor-pointer">
            <svg
              class="fill-red-500 hover:scale-[1.1] duration-250 ease-in"
              width="25px"
              height="25px"
            >
              <use href="/images/sprite.svg#cancel"></use>
            </svg>
          </button>
        </Link>
      </div>

      <ul class="mx-auto flex flex-col gap-7 text-center">
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
    </div>
  );
};
