// En tu componente React (Item.js)
import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ id, name, img, price, stock }) => {
  return (
    <article className="CardItem">
      <div className="itemContent">
        <div className="itemImage">
          <picture>
            <img src={img} alt={name} className="ItemImg" />
          </picture>
        </div>
        <div className="itemInfo">
          <header className="header">
            <h2 className="ItemHeader">{name}</h2>
          </header>
          <section>
            <p className="info">Precio: ${price}</p>
            <p className="info">Stock disponible: {stock}</p>
          </section>
          <footer className="ItemFooter">
            <Link to={`/item/${id}`} className="option">
              Ver detalles
            </Link>
          </footer>
        </div>
      </div>
    </article>
  );
};

export default Item;

