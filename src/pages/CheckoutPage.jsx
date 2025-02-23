import { Header } from "../components/Header";
import { Checkout } from "../components/Checkout";
import { Footer } from "../components/Footer";
export const CheckoutPage = ({ removePizzaFromCart, pizza }) => {
  return (
    <>
      <Header />
      <Checkout removePizzaFromCart={removePizzaFromCart} pizza={pizza} />
      <Footer />
    </>
  );
};
