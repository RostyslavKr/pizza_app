import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Promotion } from "../components/Promotion";
import { ScrollToTop } from "../ScrollToTop";

export const PromotionPage = ({ pizza }) => {
  return (
    <>
      <Header pizza={pizza} />
      <Promotion />
      <Footer />
      <ScrollToTop />
    </>
  );
};
