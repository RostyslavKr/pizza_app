import { useState } from "react";
import { Link } from "react-router";
import { format } from "date-fns";
import { DateTimePicker } from "./DataTimePicker";
import axios from "axios";
axios.defaults.baseURL = "https://652bfd10d0d1df5273ef0137.mockapi.io/api/v1";

export const Order = ({ pizza }) => {
  const [statusOrder, setStatusOrder] = useState(false);
  const [typeOrder, setTypeOrder] = useState("C");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [delTerms, setDelTerms] = useState("quickly");
  const [selectedDate, setSelectedDate] = useState(null);
  const [address, setAddress] = useState({
    street: "",
    house: "",
    apartment: "",
    floor: "",
    entrance: "",
    intercom: "",
  });
  const [typePayment, setTypePayment] = useState("terminal");
  const [addition, setAddition] = useState("");

  const priceProduct = parseFloat(localStorage.getItem("totalCostOrder")) || 0;
  const deliveryCost = 5;
  const totalPrice = priceProduct + deliveryCost;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const order = {
      name: name,
      phone: phoneNumber,
      typeOrder: typeOrder,
      delTerm: delTerms,
      date: format(selectedDate, "eeee, dd MMMM yyyy HH:mm"),
      address: address,
      typePay: typePayment,
      coment: addition,
      totalPrice: totalPrice,
      pizza: pizza,
    };

    axios
      .post("/order", {
        order,
      })
      .then((response) => {
        console.log(response);
        setStatusOrder(true);
        localStorage.clear();
      })
      .catch((error) => {
        console.error("Помилка запиту:", error);
      });
  };
  console.log("date", format(selectedDate, "eeee, dd MMMM yyyy HH:mm"));
  return (
    <section>
      <div class="pt-36 pb-12 px-10 ">
        {statusOrder ? (
          <p>Your order have done successful</p>
        ) : (
          <>
            <h3 class="text-center font-bold text-4xl">Placing an order</h3>
            <div class="flex gap-12">
              <div class="flex flex-col gap-10 w-[60%]">
                <div class="p-[20px] bg-white rounded-xl shadow-md">
                  <p class="font-bold text-3xl pb-[10px]">Placing an order</p>
                  <form class="flex">
                    <label class="block w-full cursor-pointer ">
                      <input
                        type="radio"
                        checked={typeOrder === "C"}
                        value="C"
                        class="hidden peer"
                        onChange={() => setTypeOrder("C")}
                      />

                      <span class="block p-4 rounded-sm font-medium text-xl text-center w-[90%] peer-checked:bg-amber-600 peer-checked:text-white peer-checked:font-bold border-amber-600 border duration-300 ease-in-out">
                        Courier delivery
                      </span>
                    </label>
                    <label class="block w-full cursor-pointer ">
                      {" "}
                      <input
                        type="radio"
                        checked={typeOrder === "P"}
                        value="P"
                        class="hidden peer"
                        onChange={() => setTypeOrder("P")}
                      />
                      <span class="block p-4 rounded-sm font-medium text-xl text-center w-[90%] peer-checked:bg-amber-600 peer-checked:text-white peer-checked:font-bold border-amber-600 border duration-300 ease-in-out">
                        Pick up from restaurant
                      </span>{" "}
                    </label>
                  </form>
                </div>
                <div class="p-[20px] bg-white rounded-xl shadow-md">
                  <p class="font-bold text-3xl pb-[10px]">Recipient details</p>
                  <form class="flex gap-2">
                    <label class="w-[90%]">
                      <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        class="p-2 rounded-md border border-gray-400 w-full "
                        onChange={(e) => setName(e.target.value)}
                      />
                    </label>
                    <label class="w-[90%]">
                      <input
                        type="text"
                        placeholder="Phone number"
                        value={phoneNumber}
                        class="p-2 rounded-md border border-gray-400 w-full "
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </label>
                  </form>
                </div>
                {typeOrder === "C" ? (
                  <div class="p-[20px] bg-white rounded-xl shadow-md">
                    <p class="font-bold text-3xl pb-[10px]">Address</p>
                    <form class="grid grid-cols-3 gap-3">
                      <input
                        type="text"
                        name="street"
                        placeholder="Street"
                        onChange={handleChange}
                        class="p-2 rounded-md border border-gray-400"
                      />
                      <input
                        type="text"
                        name="house"
                        placeholder="House/Building Number"
                        onChange={handleChange}
                        class="p-2 rounded-md border border-gray-400"
                      />
                      <input
                        type="text"
                        name="apartment"
                        placeholder="Apartment"
                        onChange={handleChange}
                        class="p-2 rounded-md border border-gray-400"
                      />
                      <input
                        type="text"
                        name="floor"
                        placeholder="Floor"
                        onChange={handleChange}
                        class="p-2 rounded-md border border-gray-400"
                      />
                      <input
                        type="text"
                        name="entrance"
                        placeholder="Entrance"
                        onChange={handleChange}
                        class="p-2 rounded-md border border-gray-400"
                      />
                      <input
                        type="text"
                        name="intercom"
                        placeholder="Intercom Code"
                        onChange={handleChange}
                        class="p-2 rounded-md border border-gray-400"
                      />
                    </form>
                  </div>
                ) : (
                  <div class="p-[20px] bg-white rounded-xl shadow-md">
                    <p class="font-bold text-3xl pb-[10px]">Address</p>
                    <p class="font-medium text-xl">
                      2925 18th St <br /> Bettendorf, IA 52722
                    </p>
                  </div>
                )}

                <div class="p-[20px] bg-white rounded-xl shadow-md">
                  <p class="font-bold text-3xl pb-[10px]">Delivery terms</p>
                  <form>
                    <label class="block w-full cursor-pointer ">
                      <input
                        type="radio"
                        checked={delTerms === "quickly"}
                        value="quickly"
                        class="hidden peer"
                        onChange={() => setDelTerms("quickly")}
                      />
                      <span class="block font-medium text-xl text-center w-[50%] rounded-sm peer-checked:bg-amber-600 peer-checked:text-white  border-amber-600 border duration-300 ease-in-out mb-2">
                        As soon as possible
                      </span>
                    </label>{" "}
                    <label class="block w-full cursor-pointer ">
                      <input
                        type="radio"
                        value="certain time"
                        class="hidden peer"
                        checked={delTerms === "certain time"}
                        onChange={() => setDelTerms("certain time")}
                      />
                      <span class="block font-medium text-xl text-center  rounded-sm w-[50%] peer-checked:bg-amber-600 peer-checked:text-white  border-amber-600 border duration-300 ease-in-out">
                        By a certain time
                      </span>
                    </label>
                    {delTerms === "quickly" ? null : (
                      <label>
                        <DateTimePicker
                          selectedDate={selectedDate}
                          onChange={setSelectedDate}
                        />
                      </label>
                    )}
                  </form>
                </div>
                <div class="p-[20px] bg-white rounded-xl shadow-md">
                  <p class="font-bold text-3xl pb-[10px]">Payment Terms</p>
                  <form>
                    <label>
                      <input
                        type="radio"
                        title="Cash Payment"
                        checked={typePayment === "cash"}
                        value="cash"
                        class="hidden peer"
                        onChange={() => setTypePayment("cash")}
                      />{" "}
                      <span class="block font-medium text-xl text-center w-[50%] rounded-sm peer-checked:bg-amber-600 peer-checked:text-white border-amber-600 border duration-300 ease-in-out mb-2">
                        Cash Payment
                      </span>
                    </label>
                    <label>
                      <input
                        type="radio"
                        title="Payment via Terminal"
                        checked={typePayment === "terminal"}
                        value="terminal"
                        class="hidden peer"
                        onChange={() => setTypePayment("terminal")}
                      />
                      <span class="block font-medium text-xl text-center w-[50%] rounded-sm peer-checked:bg-amber-600 peer-checked:text-white  border-amber-600 border duration-300 ease-in-out">
                        Payment via Terminal
                      </span>
                    </label>
                  </form>
                </div>
                <div class="p-[20px] bg-white rounded-xl shadow-md">
                  <p class="font-bold text-3xl pb-[10px]">In addition</p>
                  <form>
                    <label>
                      <input
                        type="text"
                        placeholder="Comment"
                        value={addition}
                        class="p-2 rounded-md border border-gray-400 w-[60%]"
                        onChange={(e) => setAddition(e.target.value)}
                      />
                    </label>
                  </form>
                </div>
              </div>
              <div class="p-[25px] bg-white rounded-xl shadow-md w-[40%] h-fit">
                <div class="flex justify-between pb-5">
                  <p class="font-bold text-xl">My order</p>
                  <Link to="/checkout">
                    <p class="font-medium text-xl">Change</p>
                  </Link>
                </div>
                <ul class="flex flex-col gap-2 pb-5">
                  {pizza.map((p) => (
                    <li key={p.id} class="flex">
                      <img src={p.image} alt="pizza" width={70} height={70} />
                      <div class="pl-3">
                        <p class="font-bold text-xl">{p.title}</p>
                        <p>{p.weight}g</p>
                        {p.count === 1 ? null : <p>x{p.count}</p>}
                      </div>
                    </li>
                  ))}
                </ul>
                <p class="font-semibold text-lg">
                  Products: {priceProduct.toFixed(2)}${" "}
                </p>
                <p class="font-semibold text-lg">Delivery: {deliveryCost}$</p>
                <p class="font-bold text-2xl">
                  Total: {totalPrice.toFixed(2)}$
                </p>
                <button
                  onClick={handleSubmit}
                  type="submit"
                  class="w-full rounded-sm p-2 font-bold text-2xl text-white bg-amber-600 mt-4 cursor-pointer hover:scale-105 hover:bg-amber-700 focus:scale-105 "
                >
                  Order
                </button>
              </div>
            </div>{" "}
          </>
        )}
      </div>
    </section>
  );
};
