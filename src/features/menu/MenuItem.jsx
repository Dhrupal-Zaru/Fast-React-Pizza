import PropTypes from "prop-types";
import { formatCurrency } from "../../utils/helpers.js";
import React from "react";
import Button from "../../ui/Button.jsx";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getCurrentQtyById } from "../cart/cartSlice.js";
import DeleteItem from "../cart/DeleteItem.jsx";
import UpdateItemQty from "../cart/UpdateItemQty.jsx";

function MenuItem({ pizza }) {
  const dispatch = useDispatch();
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const currentQty = useSelector(getCurrentQtyById(id));
  const isInCart = currentQty > 0;

  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-80 grayscale" : ""}`}
      />
      <div className="flex flex-col grow pt-0.5">
        <p className="font-medium">
          {name}
          {id}
        </p>
        <p className="text-sm italic text-zinc-500 capitalize">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto gap-1 flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm uppercase font-medium text-zinc-500">
              Sold out
            </p>
          )}
          {isInCart && (
            <div className="flex items-center gap-2 sm:gap-6">
              <UpdateItemQty pizzaId={id} currentQty={currentQty}/>
              <DeleteItem pizzaId={id} />
            </div>
          )}
          {!soldOut && !isInCart && (
            <Button type="small" onClick={handleAddToCart}>
              Add To Cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}
MenuItem.propTypes = {
  pizza: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    unitPrice: PropTypes.number.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    soldOut: PropTypes.bool.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default MenuItem;
