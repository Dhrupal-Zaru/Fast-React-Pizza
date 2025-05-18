import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";
import React from "react";

function Menu() {
  const menu = useLoaderData();
  return (
    <>
      <h1 className=" py-3 underline uppercase text-2xl text-zinc-700 text-center">Menu</h1>
      <ul className="divide-y divide-zinc-300 px-4 ">
        {menu.map((pizza) => (
          <MenuItem key={pizza.id} pizza={pizza} />
        ))}
      </ul>
    </>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}
export default Menu;
