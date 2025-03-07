import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Menu } from "../components/Menu/Menu";
import { AboutUs } from "../components/AboutUs";
import { Footer } from "../components/Footer";

export const MainPage = ({ addToCart, pizza }) => {
  return (
    <>
      <Header pizza={pizza} />
      <Hero />
      <Menu addToCart={addToCart} />
      <AboutUs />
      <Footer />
    </>
  );
};
