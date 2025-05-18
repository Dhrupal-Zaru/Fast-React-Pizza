import React from "react";
import { formatCurrency } from "../../utils/helpers";
import DeleteItem from "./DeleteItem";
import UpdateItemQty from "./UpdateItemQty";
import { useSelector } from "react-redux";
import { getCurrentQtyById } from "./cartSlice";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const currentQty = useSelector(getCurrentQtyById(pizzaId));
  return (
    <li className="py-2 flex flex-wrap items-center justify-between ">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between gap-2 sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateItemQty pizzaId={pizzaId} currentQty={currentQty}/>
        <DeleteItem pizzaId={pizzaId}/>
      </div>
    </li>
  );
}

export default CartItem;
