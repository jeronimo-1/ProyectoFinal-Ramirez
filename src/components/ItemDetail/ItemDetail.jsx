// En tu componente React (ItemDetail.js)
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { useState, useContext } from "react";
import Cart from "../cart/cart";
import { Link } from "react-router-dom";

const ItemDetail = ({ id, name, price, category, img, stock, description }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);
  const [showFinishButton, setShowFinishButton] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);

    const item = {
      id,
      name,
      price,
    };

    addItem(item, quantity);
    setShowFinishButton(true);
  };

  const handleFinishPurchase = () => {
    setShowCart(true);
  };

  return (
    <article className="ItemDetail">
      <div className="ItemContent">
        <div className="ItemImageContainer">
          <img src={img} alt={name} className="ItemImage" />
        </div>

        <section className="ItemInfo">
          <h2>{name}</h2>
          <p>Categoría: {category}</p>
          <p>Precio: ${price}</p>
          <p>Stock disponible: {stock}</p>
          <p>Descripción: {description}</p>

          {showFinishButton ? (
          <Link to="/cart">
            <button className="Button" onClick={handleFinishPurchase}>
              Terminar compra
            </button>
          </Link>
        ) : (
          <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}></ItemCount>
        )}
        </section>
      </div>

    </article>
  );
};

export default ItemDetail;

