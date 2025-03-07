import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { PizzaDetails } from "../components/PizzaDetails";
import { ScrollToTop } from "../ScrollToTop";
export const PizzaDetailsPage = ({ addToCart, pizza }) => {
  return (
    <>
      <Header pizza={pizza} />
      <PizzaDetails addToCart={addToCart} />
      <Footer />
      <ScrollToTop />
    </>
  );
};
