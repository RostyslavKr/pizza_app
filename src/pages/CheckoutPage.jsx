import { Header } from "../components/Header";
import { Checkout } from "../components/Checkout";
import { Footer } from "../components/Footer";
import { ScrollToTop } from "../ScrollToTop";
export const CheckoutPage = ({ removePizzaFromCart, pizza }) => {
  return (
    <>
      <Header pizza={pizza} />
      <Checkout removePizzaFromCart={removePizzaFromCart} pizza={pizza} />
      <Footer />
      <ScrollToTop />
    </>
  );
};
