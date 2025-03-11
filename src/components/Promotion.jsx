export const Promotion = () => {
  return (
    <section>
      <div class="grid gap-16 pt-36 pb-15 px-3">
        <div class="flex  justify-between gap-4">
          <img
            src="/images/deals/baner_2+1.png"
            alt="baner21"
            width={500}
            height={500}
          />
          <div class=" flex flex-col  justify-center gap-7">
            <p class="font-bold text-2xl ">
              The "2+1" promotion is valid on Monday, Tuesday, Wednesday, and
              Thursday, except on public holidays.
            </p>
            <div>
              <p class=" font-medium text-xl ">Order 3 pizzas, pay for 2!</p>
              <p class="font-light text-sm ">
                The value of the bonus pizza is 1 UAH.
              </p>
            </div>
            <p class=" font-medium text-xl ">
              ** The free pizza is the one with the lowest price on the receipt.
            </p>
          </div>
        </div>
        <div class="flex  justify-between">
          <div class="flex flex-col  justify-center gap-7">
            <p class="font-bold text-2xl ">
              The "3+1" promotion is valid on Friday, Saturday, Sunday, and
              public holidays.
            </p>
            <div>
              <p class=" font-medium text-xl ">Order 4 pizzas, pay for 3!</p>
              <p class="font-light text-sm ">
                The value of the bonus pizza is 1 UAH.
              </p>
            </div>

            <p class=" font-medium text-xl ">
              ** The free pizza is the one with the lowest price on the receipt.
            </p>
          </div>
          <img
            src="/images/deals/baner_3+1.png"
            alt="baner31"
            width={500}
            height={500}
          />
        </div>
        <div class="flex  justify-between gap-4">
          <img
            src="/images/deals/baner_bith_gift.png"
            alt="banergift"
            width={500}
            height={500}
          />
          <div class=" flex flex-col   gap-6">
            <p class="font-bold text-xl ">
              Do you celebrate your birthday? Get a gift from Red Moon – three
              pizzas:
            </p>
            <ul class="font-bold text-lg ">
              <li>- Hawaiian 30 cm</li>
              <li>- Margherita 30 cm</li>
              <li>- Pizza with ham and mushrooms 30 cm</li>
            </ul>
            <p class=" font-medium text-xl ">
              *To use the promotion, you need to place an order worth at least
              20$ for any dishes, except promotional items.
            </p>
            <p class=" font-medium text-xl ">
              *To receive the gift, you need to present a document proving your
              birth date to the courier.
            </p>
            <p class="font-light text-sm ">
              *Offer is valid on your birthday and for 7 days after it.
            </p>
            <p class="font-light text-sm ">
              *This offer cannot be combined with promotional codes.
            </p>
            <p class="font-light text-sm ">*It can be used once per year.</p>
          </div>
        </div>
        <div class="flex justify-between">
          <div class=" flex flex-col  justify-center gap-7">
            <p class="font-bold text-2xl ">
              We offer a 10% discount on orders with pickup
            </p>
            <p class=" font-medium text-xl ">
              It can be combined with promotional sets and 2+1, 3+1 pizza
              offers.
            </p>
            <p class=" font-medium text-xl ">
              Pickup is available at the address: 2925 18th St, Bettendorf, IA
              52722.
            </p>
            <p class=" font-medium text-xl ">
              Self-pickup orders are accepted from 11:00.
            </p>
          </div>
          <img
            src="/images/deals/baner_pickup.png"
            alt="banerpickup"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};
