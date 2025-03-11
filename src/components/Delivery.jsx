import { useEffect, useRef } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
} from "@vis.gl/react-google-maps";
const containerStyle = {
  width: "500px",
  height: "500px",
};

const center = {
  lat: 41.552116149758454,
  lng: -90.49952117290312,
};
const libraries = ["marker"];
export const Delivery = () => {
  return (
    <section>
      <div class="flex  pt-36 pb-15 ">
        <div class="w-[500px] h-[500px]">
          <APIProvider
            apiKey={"AIzaSyBx_czP3BJK0vPF2Ned-0xA7VVHEy3n_mE"}
            onLoad={() => console.log("Maps API has loaded.")}
          >
            {" "}
            <Map
              mapId="35ef60a2426c54ac"
              defaultZoom={14}
              defaultCenter={center}
            >
              <AdvancedMarker
                position={center}
                content="/images/icon-pizza.png"
              >
                {/* <Pin
                  background={"#FBBC04"}
                  glyphColor={"#000"}
                  borderColor={"#000"}
                /> */}
              </AdvancedMarker>
            </Map>
          </APIProvider>
        </div>

        <div>
          {" "}
          <div class="flex justify-baseline">
            <svg width="25px" height="25px" class="fill-red-500 cursor-pointer">
              <use href="./images/sprite.svg#phone"></use>
            </svg>
            <p>
              You can place an order on the website or by calling: (563)
              953-4444
            </p>
          </div>
          <div class="flex  justify-baseline ">
            <div>
              <img
                src="/images/icon-list-money-hand.svg"
                alt="cash"
                width={25}
                height={25}
              />
            </div>
            <div>
              <p>You can pay for your order by:</p>
              <ul>
                <li>— Cash</li>
                <li> — Terminal</li>
                <li> — Online bank card</li>
              </ul>
            </div>
          </div>
          <div class="flex justify-baseline">
            <div>
              <img
                src="/images/icon-list-scooter-big.svg"
                alt="cash"
                width={25}
                height={25}
              />
            </div>
            <div>
              <p>Average delivery time:</p>
              <ul>
                <li>
                  <p>"Green Zone" – up to 30 minutes;</p>
                </li>
                <li>
                  <p>"Yellow Zone" – up to 60 minutes.</p>
                </li>
              </ul>
              <p>
                Delivery time may be extended due to weather conditions and
                traffic jams.
              </p>
            </div>
          </div>
          <div class="flex justify-baseline">
            <div>
              <img
                src="/images/icon-list-info.svg"
                alt="cash"
                width={25}
                height={25}
              />
            </div>
            <p>
              In case of delivery delay, receive a Cheese Roll or Pizza with ham
              and mushrooms as a gift with your next order! (This offer is valid
              every day except December 31, March 8, and February 14).
            </p>
          </div>
          <div class="flex justify-baseline">
            <div>
              <img
                src="/images/icon-list-scooter-big.svg"
                alt="cash"
                width={25}
                height={25}
              />
            </div>
            <div>
              <p>Pickup -10%</p>
              <p>
                Pickup is available at the address - 2925 18th St, Bettendorf,
                IA 52722.
              </p>
            </div>
          </div>
          <div class="flex justify-baseline">
            <div>
              <img
                src="/images/icon-list-info.svg"
                alt="cash"
                width={25}
                height={25}
              />
            </div>
            <div>
              <p>Orders are accepted and delivered:</p>
              <p>From 10:00 to 21:45 for delivery</p>
              <p>From 11:00 to 21:45 for Pickup</p>
              <p>No days off!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
