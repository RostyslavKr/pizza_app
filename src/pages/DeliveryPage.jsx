import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Delivery } from "../components/Delivery";
import { ScrollToTop } from "../ScrollToTop";
export const DeliveryPage = ({ pizza }) => {
  return (
    <>
      {" "}
      <Header pizza={pizza} />
      <Delivery />
      <Footer />
      <ScrollToTop />
    </>
  );
};
