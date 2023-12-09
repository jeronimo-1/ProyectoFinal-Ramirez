import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./CartWidget.css";
import cartImage from "./assets/cart.png"

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <div className="cartWidget">
        <img src={cartImage} alt="cart-widget" />
        {totalItems}
      </div>
    </>
  );
};

export default CartWidget;