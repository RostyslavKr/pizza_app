import { Header } from "../components/Header";

import { Footer } from "../components/Footer";
import { Order } from "../components/Order";

export const OrderPage = ({ pizza }) => {
  return (
    <>
      {" "}
      <Header pizza={pizza} />
      <Order />
      <Footer />
    </>
  );
};
