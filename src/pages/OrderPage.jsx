import { Header } from "../components/Header";

import { Footer } from "../components/Footer";
import { Order } from "../components/Order";

export const OrderPage = ({ pizza, removeOrder }) => {
  return (
    <>
      {" "}
      <Header pizza={pizza} />
      <Order pizza={pizza} removeOrder={removeOrder} />
      <Footer />
    </>
  );
};
