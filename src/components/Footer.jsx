export const Footer = () => {
  return (
    <footer class="bg-[#1E1E1E] h-fit">
      <div class="flex flex-col md:flex-row items-center md:justify-around pt-10 pb-4 w-[90%] mx-auto border-b-[1px] border-[#2E292D]">
        <img
          src="./images/logo.png"
          alt="company logo"
          width={120}
          height={120}
        />
        <address class="mb-7 md:mb-0">
          <ul class="grid-row-3 grid gap-4  text-white">
            <li class="flex">
              <p class="pr-2">
                <svg
                  width="25px"
                  height="25px"
                  class="fill-white cursor-pointer"
                >
                  <use href="./images/sprite.svg#location"></use>
                </svg>
              </p>
              <a
                href="https://maps.app.goo.gl/Q4H8VaCMcDHnGPZV7"
                target="_blank"
                class="hover:text-orange-700 duration-250 ease-in"
              >
                2925 18th St <br /> Bettendorf, IA 52722
              </a>
            </li>
            <li class="flex">
              <p class="pr-2">
                <svg
                  width="25px"
                  height="25px"
                  class="fill-white cursor-pointer"
                >
                  <use href="./images/sprite.svg#phone"></use>
                </svg>
              </p>
              <a
                href="tel:+15639534444"
                class="hover:text-orange-700 duration-250 ease-in"
              >
                (563) 953-4444
              </a>
            </li>
            <li class="flex">
              <p class="pr-2">
                <svg
                  width="25px"
                  height="25px"
                  class="fill-white cursor-pointer"
                >
                  <use href="./images/sprite.svg#email"></use>
                </svg>
              </p>
              <a
                href="mailto:info_redmoonpizza@gmail.com"
                class="hover:text-orange-700 duration-250 ease-in"
              >
                info_redmoonpizza@gmail.com
              </a>
            </li>
          </ul>
        </address>

        <ul class="flex gap-8">
          <li>
            <a>
              <svg
                width="40px"
                height="40px"
                class="fill-white cursor-pointer hover:fill-orange-700 duration-250 ease-in"
              >
                <use href="./images/sprite.svg#icon-instagram"></use>
              </svg>
            </a>
          </li>
          <li>
            <a>
              <svg
                width="40px"
                height="40px"
                class="fill-white cursor-pointer hover:fill-orange-700 duration-250 ease-in"
              >
                <use href="./images/sprite.svg#tiktok2"></use>
              </svg>
            </a>
          </li>
          <li>
            <a>
              <svg
                width="40px"
                height="40px"
                class="fill-white cursor-pointer hover:fill-orange-700 duration-250 ease-in"
              >
                <use href="./images/sprite.svg#icon-facebook"></use>
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <div class="pt-6 pb-10 px-5 text-white flex justify-center">
        <p class="pr-6 border-r border-[#2E292D]">
          ©2025 Red Moon Pizza, All rights reserved.
        </p>
        <p class="pl-6">
          Created by{" "}
          <span>
            <a
              href="https://web-portfolio-tawny.vercel.app/"
              target="_blank"
              class=" hover:text-orange-700 duration-250 ease-in"
            >
              KR
            </a>
          </span>{" "}
        </p>
      </div>
    </footer>
  );
};
