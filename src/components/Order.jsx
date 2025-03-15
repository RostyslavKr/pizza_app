import { useState } from "react";

export const Order = () => {
  const [typeOrder, setTypeOrder] = useState("C");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [delTerms, setDelTerms] = useState("quickly");
  const [typePayment, setTypePayment] = useState("terminal");
  const [addition, setAddition] = useState("");

  return (
    <section>
      <div class="pt-36">
        <h3>Placing an order</h3>
        <div>
          <div>
            <p>Placing an order</p>
            <form>
              <label>
                <input
                  type="radio"
                  checked={typeOrder === "C"}
                  value="C"
                  onChange={() => setTypeOrder("C")}
                />
                <span>
                  Courier delivery The order will arrive at the selected address
                </span>{" "}
              </label>
              <label>
                {" "}
                <input
                  type="radio"
                  checked={typeOrder === "P"}
                  value="P"
                  onChange={() => setTypeOrder("P")}
                />
                <span>Pickup Pick up from restaurant</span>{" "}
              </label>
            </form>
          </div>
          <div>
            <p>Recipient details</p>
            <form>
              <label>
                <input
                  type="text"
                  title="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              <label>
                <input
                  type="text"
                  title="Phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </label>
            </form>
          </div>
          {typeOrder === "C" ? (
            <div>
              <p>Address</p>
              <form>
                <input type="text" title="Street" />
                <input type="text" title="House/Building Number" />
                <input type="text" title="Apartment" />
                <input type="text" title="Floor" />
                <input type="text" title="Entrance" />
                <input type="text" title="Intercom Code" />
              </form>
            </div>
          ) : (
            <div>
              <p>Address</p>
              <p>
                2925 18th St <br /> Bettendorf, IA 52722
              </p>
            </div>
          )}

          <div>
            <p>Delivery terms</p>
            <form>
              <label>
                <input
                  type="radio"
                  checked={delTerms === "quickly"}
                  value="quickly"
                  onChange={() => setDelTerms("quickly")}
                />
                <span>As soon as possible</span>
              </label>
              <label>
                <input
                  type="radio"
                  value="certain time"
                  checked={delTerms === "certain time"}
                  onChange={() => setDelTerms("certain time")}
                />
                <span>By a certain time</span>
              </label>
              {delTerms === "quickly" ? null : (
                <label>
                  <input type="date" />
                  <input type="time" />
                </label>
              )}
            </form>
          </div>
          <div>
            <p>Payment Terms</p>
            <form>
              <label>
                <input
                  type="radio"
                  title="Cash Payment"
                  checked={typePayment === "cash"}
                  value="cash"
                  onChange={() => setTypePayment("cash")}
                />{" "}
                <span>Cash Payment</span>
              </label>
              <label>
                <input
                  type="radio"
                  title="Payment via Terminal"
                  checked={typePayment === "terminal"}
                  value="terminal"
                  onChange={() => setTypePayment("terminal")}
                />
                <span>Payment via Terminal</span>
              </label>
            </form>
          </div>
          <div>
            <p>In addition</p>
            <form>
              <label>
                <input
                  type="text"
                  title="Comment"
                  value={addition}
                  onChange={(e) => setAddition(e.target.value)}
                />
              </label>
            </form>
          </div>
        </div>
        <div>
          <div>
            <p>My order</p>
            <p>Change</p>
          </div>
          <ul>
            <li>pizza</li>
          </ul>
          <p>Products </p>
          <p>Delivery</p>
          <p>Total</p>
          <button>Order</button>
        </div>
      </div>
    </section>
  );
};
