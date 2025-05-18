import React from "react";
import CreateUser from '../features/user/CreateUser'
import { useSelector } from "react-redux";
import Button from "./Button";

function Home() {
  const username = useSelector(state => state.user.username);

  return (
    <div className="my-12 mx-6 text-center md:my-16">
      <h1 className="text-2xl text-zinc-700 mb-12 sm:text-4xl">
        The best pizza.
        <br />
        <span className=" text-orange-500">Straight out of the oven, straight to you.</span>
      </h1>
      { username === '' ? <CreateUser/> : <Button type='primary' to='/menu'>Continue Ordering, {username}</Button>} 
    </div>
  );
}

export default Home;
