export const Header = () => {
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
          <ul class="flex w-lg justify-between justify-items-center items-center font-header">
            <li class="text-white hover:text-orange-700">
              <a class="uppercase font-bold text-lg">Home</a>
            </li>
            <li class="text-white hover:text-orange-700">
              <a class="uppercase font-bold text-lg">About Us</a>
            </li>
            <li class="text-white hover:text-orange-700">
              <a class="uppercase font-bold text-lg">Deals</a>
            </li>
            <li class="text-white hover:text-orange-700">
              <a class="uppercase font-bold text-lg">Menu</a>
            </li>
            <li class="text-white hover:text-orange-700">
              <a class="uppercase font-bold text-lg">Delivery</a>
            </li>
          </ul>
        </nav>
        <div class="flex">
          <button>
            <svg
              width="40px"
              height="40px"
              class="fill-white hover:fill-orange-700"
            >
              <use href="./images/sprite.svg#login"></use>
            </svg>
          </button>
          <button>
            <svg
              width="40px"
              height="40px"
              class="fill-white hover:fill-orange-700"
            >
              <use href="./images/sprite.svg#shopping-basket"></use>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};
