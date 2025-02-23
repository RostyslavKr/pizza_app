export const Hero = () => {
  return (
    <section class="bg-[url(./images/hero-image.png)] bg-cover bg-no-repeat bg-center w-screen pt-90 pb-95">
      <div class="grid-row-3 grid gap-4  font-menu text-white pl-6 ">
        <h1 class="text-left text-xs w-[90%]">
          In the heart of Bettendorf, we invite you to enjoy the tastiest pizza
          in town!
        </h1>
        <p class="text-left w-[40%]">
          Crispy crust, fresh mozzarella, flavorful sauces, and the finest
          toppings come together to create a harmony you won’t forget. The menu
          features classic favorite pizzas as well as signature recipes that
          will surprise even the most discerning food lovers.
        </p>
        <p class="text-left w-[40%]">
          A cozy atmosphere, friendly staff, and the chance to enjoy meals with
          friends or family – all this awaits you at Red Moon Pizza.
        </p>
        <button class="rounded-md bg-[#C74C33] py-4 w-[163px] hover:scale-[1.1] hover:bg-[#a7402c] duration-400 ease-in cursor-pointer">
          Order Now
        </button>
      </div>
    </section>
  );
};
