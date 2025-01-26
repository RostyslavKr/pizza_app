export const Header = () => {
  return (
    <header>
      <div class="flex justify-around content-center bg-orange-300">
        <img
          src="./images/logo.png"
          alt="company logo"
          width={120}
          height={120}
        />
        <nav class="flex ">
          <ul class="flex w-lg justify-between justify-items-center items-center font-header">
            <li class="text-white hover:text-orange-700">
              <a class="uppercase font-bold text-lg">Головна</a>
            </li>
            <li class="text-white hover:text-orange-700">
              <a class="uppercase font-bold text-lg">Про нас</a>
            </li>
            <li class="text-white hover:text-orange-700">
              <a class="uppercase font-bold text-lg">Акції</a>
            </li>
            <li class="text-white hover:text-orange-700">
              <a class="uppercase font-bold text-lg">Меню</a>
            </li>
            <li class="text-white hover:text-orange-700">
              <a class="uppercase font-bold text-lg">Доставка</a>
            </li>
          </ul>
        </nav>
        <div class="flex">
          <button>
            <svg
              width="50px"
              height="50px"
              class="fill-white hover:fill-orange-700"
            >
              <use href="./images/sprite.svg#login"></use>
            </svg>
          </button>
          <button>
            <svg
              width="50px"
              height="50px"
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
