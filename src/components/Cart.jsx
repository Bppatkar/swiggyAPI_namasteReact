import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/CartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearbag = () => {
    dispatch(clearCart());
  };

  return (
    <div className="m-4 p-4 text-center">
      <h1 className="text-2xl font-bold">Cart</h1>
      <button
        className="m-2 rounded-lg bg-black p-2 text-white"
        onClick={handleClearbag}
      >
        Clear 🎒
      </button>
      {cartItems.length === 0 && (
        <h1>Your Cart is Empty Please add some items</h1>
      )}
      <div className="m-auto w-6/12">
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
