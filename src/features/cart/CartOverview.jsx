import { Link } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";
import { getTotalCartPrice, getTotalCartQty } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const totalCartQty = useSelector(getTotalCartQty);
  const totalCartPrice = useSelector(getTotalCartPrice);
  if(!totalCartQty) return null;

  return (
    <div className="bg-zinc-800 p-5 text-zinc-200 font-semibold uppercase flex items-center justify-between">
      <p className="text-zinc-300 space-x-4 ">
        <span>{totalCartQty} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
