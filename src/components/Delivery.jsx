import {
  APIProvider,
  Map,
  AdvancedMarker,
  useMap,
} from "@vis.gl/react-google-maps";
import { useEffect, useRef } from "react";

const center = {
  lat: 41.552116149758454,
  lng: -90.49952117290312,
};

function DeliveryPolygons() {
  const map = useMap(); // Отримуємо карту
  const greenPolygonRef = useRef(null);
  const yellowPolygonRef = useRef(null);

  useEffect(() => {
    if (!map) return;

    const greenZoneCoords = [
      { lat: 41.521578, lng: -90.500599 },
      { lat: 41.52171, lng: -90.486994 },
      { lat: 41.524224, lng: -90.474272 },
      { lat: 41.528324, lng: -90.459607 },
      { lat: 41.539964, lng: -90.447592 },
      { lat: 41.552659, lng: -90.438404 },
      { lat: 41.557515, lng: -90.427189 },
      { lat: 41.565496, lng: -90.419797 },
      { lat: 41.57614, lng: -90.423187 },
      { lat: 41.595156, lng: -90.493439 },
      { lat: 41.591184, lng: -90.55144 },
      { lat: 41.528543, lng: -90.551385 },
      { lat: 41.529249, lng: -90.541485 },
      { lat: 41.522297, lng: -90.513998 },
      { lat: 41.521907, lng: -90.4955 },
    ];

    const yellowZoneCoords = [
      { lat: 41.590714, lng: -90.55144 },
      { lat: 41.599814, lng: -90.622764 },
      { lat: 41.533409, lng: -90.639429 },
      { lat: 41.500738, lng: -90.629215 },
      { lat: 41.465426, lng: -90.584792 },
      { lat: 41.427644, lng: -90.587342 },
      { lat: 41.4283, lng: -90.553733 },
      { lat: 41.456727, lng: -90.5199 },
      { lat: 41.461885, lng: -90.49935 },
      { lat: 41.458155, lng: -90.48063 },
      { lat: 41.464907, lng: -90.459467 },
      { lat: 41.471827, lng: -90.448165 },
      { lat: 41.470938, lng: -90.41473 },
      { lat: 41.478038, lng: -90.406007 },
      { lat: 41.509521, lng: -90.404952 },
      { lat: 41.51027, lng: -90.404289 },
      { lat: 41.511868, lng: -90.411275 },
      { lat: 41.515594, lng: -90.425393 },
      { lat: 41.520468, lng: -90.425542 },
      { lat: 41.521274, lng: -90.415832 },
      { lat: 41.533504, lng: -90.416144 },
      { lat: 41.536387, lng: -90.417157 },
      { lat: 41.547542, lng: -90.424447 },
      { lat: 41.544918, lng: -90.431707 },
      { lat: 41.534085, lng: -90.439778 },
      { lat: 41.531794, lng: -90.434156 },
      { lat: 41.519401, lng: -90.459855 },
      { lat: 41.51594, lng: -90.469416 },
      { lat: 41.51413, lng: -90.507133 },
      { lat: 41.52155, lng: -90.528293 },
      { lat: 41.52325, lng: -90.547874 },
      { lat: 41.528547, lng: -90.55135 },
      { lat: 41.534487, lng: -90.551661 },
    ];

    greenPolygonRef.current = new window.google.maps.Polygon({
      paths: greenZoneCoords,
      strokeColor: "green",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "green",
      fillOpacity: 0.3,
    });
    greenPolygonRef.current.setMap(map);

    yellowPolygonRef.current = new window.google.maps.Polygon({
      paths: yellowZoneCoords,
      strokeColor: "yellow",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "yellow",
      fillOpacity: 0.3,
    });
    yellowPolygonRef.current.setMap(map);

    return () => {
      greenPolygonRef.current?.setMap(null);
      yellowPolygonRef.current?.setMap(null);
    };
  }, [map]);

  return null;
}
export const Delivery = () => {
  return (
    <section>
      <div class="flex flex-col md:flex-row  gap-10  pt-36 pb-15 px-5 ">
        <div class="w-[350px] h-[350px] md:w-[500px] md:h-[500px] mx-auto">
          <APIProvider
            apiKey={"AIzaSyBx_czP3BJK0vPF2Ned-0xA7VVHEy3n_mE"}
            onLoad={() => console.log("Maps API has loaded.")}
          >
            {" "}
            <Map
              mapId="35ef60a2426c54ac"
              defaultZoom={11}
              defaultCenter={center}
            >
              <DeliveryPolygons />
              <AdvancedMarker
                position={center}
                content="/images/icon-pizza.png"
              ></AdvancedMarker>
            </Map>
          </APIProvider>
        </div>

        <div class=" flex flex-col gap-7 md:w-[40%]">
          {" "}
          <div class="flex justify-baseline">
            <div class="pr-3">
              <svg
                width="25px"
                height="25px"
                class="fill-red-500 cursor-pointer"
              >
                <use href="./images/sprite.svg#phone"></use>
              </svg>
            </div>

            <p class="font-semibold text-lg">
              You can place an order on the website or by calling: <br /> (563)
              953-4444
            </p>
          </div>
          <div class="flex  justify-baseline ">
            <div class="pr-3">
              <img
                src="/images/icon-list-money-hand.svg"
                alt="cash"
                width={25}
                height={25}
              />
            </div>
            <div class="font-semibold text-lg">
              <p>You can pay for your order by:</p>
              <ul>
                <li>— Cash</li>
                <li> — Terminal</li>
                <li> — Online bank card</li>
              </ul>
            </div>
          </div>
          <div class="flex justify-baseline">
            <div class="pr-3">
              <img
                src="/images/icon-list-scooter-big.svg"
                alt="cash"
                width={25}
                height={25}
              />
            </div>
            <div class="font-semibold text-lg">
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
            <div class="pr-3">
              <img
                src="/images/icon-list-scooter-big.svg"
                alt="cash"
                width={25}
                height={25}
              />
            </div>
            <div class="font-semibold text-lg">
              <p>Pickup -10%</p>
              <p>
                Pickup is available at the address - 2925 18th St, Bettendorf,
                IA 52722.
              </p>
            </div>
          </div>
          <div class="flex justify-baseline">
            <div class="pr-3">
              <img
                src="/images/icon-list-info.svg"
                alt="cash"
                width={25}
                height={25}
              />
            </div>
            <div class="font-semibold text-lg">
              <p>Orders are accepted and delivered:</p>
              <p>From 10:30 to 21:30 for delivery and pickup</p>
              <p>No days off!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
