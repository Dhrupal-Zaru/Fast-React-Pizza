// Test ID: IIDSAT
import React, { useEffect } from "react";
import { useFetcher, useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import OrderItem from "./OrderItem";
import UpdateOrder from "./UpdateOrder";

function Order() {
  const order = useLoaderData();
  const fetcher = useFetcher();

  useEffect(function () {
    if (!fetcher.data && fetcher.state === "idle") fetcher.load("/menu");
  });

  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="py-6 px-5 space-y-6">
      <div className="flex flex-wrap gap-2 justify-between items-center">
        <h2 className="text-xl mb-1 font-semibold"> Order #{id} Status</h2>
        <div className="space-x-2">
          {priority && <span  className="text-sm font-semibold py-1 px-3 uppercase bg-red-100 text-red-500 rounded-full">Priority</span>}
          <span className="text-sm font-semibold py-1 px-3 uppercase bg-green-100 text-green-600 rounded-full">
            {status} order
          </span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 justify-between items-center bg-zinc-200 px-6 py-5">
        <p className="font-medium">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="text-xs text-zinc-500">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>

      <ul className=" mt-3 divide-y divide-zinc-300 border-b border-t border-zinc-300">
        {cart.map((item) => (
          <OrderItem
            item={item}
            key={item.pizzaId}
            isLoadingIngredients={fetcher.state === 'loading'}
            ingredients={
              fetcher?.data?.find((el) => el.id === item.pizzaId)?.ingredients ?? []
            }
          />
        ))}
      </ul>

      <div className="space-y-2 bg-zinc-200 py-5 px-6">
        <p className="text-sm font-medium text-zinc-600">
          Price pizza: {formatCurrency(orderPrice)}
        </p>

        {priority && (
          <p className="text-sm font-medium text-zinc-600">
            Price priority: {formatCurrency(priorityPrice)}
          </p>
        )}
        
        <p className="font-bold">
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
      {!priority && <UpdateOrder order={order}/>}
    </div>
  );
}
export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;
