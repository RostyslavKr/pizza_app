import { useEffect } from "react";
import { useLocation } from "react-router";
export const AboutUs = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#aboutus") {
      const menuSection = document.getElementById("aboutus");
      if (menuSection) {
        menuSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <section class=" bg-[url(./images/about-us.png)] bg-cover bg-no-repeat bg-left-bottom">
      <div
        id="aboutus"
        class=" px-10 w-[60%] m-auto grid-row-3 grid gap-4 pb-16 text-white backdrop-blur-sm"
      >
        <h3 class="font-bold text-3xl text-center pt-16">
          Red Moon Pizza in Bettendorf, Iowa
        </h3>
        <p class="text-base">Operating Hours: 10:00 AM to 10:00 PM</p>
        <div>
          <p class="text-sm">
            Product images on the website are for illustrative purposes and may
            differ from the actual product.
          </p>
          <p class="text-sm">
            An order is considered confirmed once our operator contacts the
            customer by phone.
          </p>
        </div>

        <p class="text-xl font-medium">
          Are you hungry and craving a delicious pizza with a crispy crust,
          baked in a wood-fired oven? Need a quick and tasty snack for an office
          lunch or a party with friends? Want to impress your loved ones with
          unforgettable flavors at a special event? Then order pizza from Red
          Moon Pizza and choose from our wide selection of Italian dishes that
          will satisfy even the pickiest tastes.
        </p>
        <p class="text-xl font-medium">
          Fast delivery in Bettendorf, Iowa, is handled by our experienced
          couriers, who will bring your order in a thermal bag to ensure your
          pizza stays warm and fragrant. Pizza preparation begins only after
          your order is confirmed, ensuring freshness and quality.
        </p>
        <h4 class=" font-bold text-xl text-center">
          The Best Wood-Fired Pizza in Bettendorf
        </h4>
        <p class="text-base">
          At Red Moon Pizza, we prepare our pizzas using only the finest
          ingredients, following traditional recipes and professional
          pizzaiolos.
        </p>
        <p class="text-base">
          You can also customize your pizza with any additional ingredients or
          sauces from our selection.
        </p>
        <h4 class=" font-bold text-xl text-center">Pizza Delivery</h4>
        <p class="text-base">
          The delivery cost is $5. Delivery speed depends on your location in
          Bettendorf:
        </p>
        <ul class="font-semibold text-base ">
          <li>
            <p>"Green Zone" – up to 30 minutes;</p>
          </li>
          <li>
            <p>"Yellow Zone" – up to 60 minutes.</p>
          </li>
        </ul>
        <p class="text-base font-medium">
          To find out which zone you're in, contact our operators. If you need a
          hot and delicious pizza fast, place your order right away and enjoy
          the amazing taste of the best wood-fired pizza from Red Moon Pizza!
        </p>
      </div>
    </section>
  );
};
