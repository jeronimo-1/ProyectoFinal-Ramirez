import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "./cart.css";
import { db } from "../../firebaseConfig";
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import CustomAlert from "../alertaCompra/alertaCompra";

const Cart = () => {
  const { cart, removeItem, clearCart } = useContext(CartContext);
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    phone: "",
    address: "",
    email: "",
  });
  const [showAlert, setShowAlert] = useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleCheckout = async () => {
    try {
    
      console.log("Información del cliente:", customerInfo);

      const orderData = {
        customerInfo,
        items: cart.map(item => ({ name: item.name, quantity: item.quantity, price: item.price })),
        totalPrice,
        timestamp: serverTimestamp(),
      };
  
      const orderRef = await addDoc(collection(db, 'orders'), orderData);
  
      console.log('Orden enviada con éxito. ID del documento:', orderRef.id);
      
      setShowCheckoutForm(false);
      clearCart(); 
      setShowAlert(true);
    } catch (error) {
      console.error('Error al enviar la orden a Firebase:', error);
    }
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );


  return (
    <div className="Cart">
      <h2>Carrito de compras</h2>
      {cart.length === 0 ? (
        <>
          <p>El carrito está vacío.</p>
          <Link className="explore-products-link" to="/">
            <button className="explore-products-button">Explorar productos</button>
          </Link>
        </>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                 
                <div>
                  <p>{item.name}</p>
                  <p>Cantidad: {item.quantity}</p>
                  <p>Precio: ${item.price * item.quantity}</p>
                </div>
                <button onClick={() => removeItem(item.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
          <p className="total-price">Precio Total: ${totalPrice.toFixed(2)}</p>
          
          <button onClick={() => setShowCheckoutForm(true)}>
            Finalizar compra
          </button>

          {showCheckoutForm && (
            <div className="form-container">
              <h3>Ingresa tus datos</h3>
              <form>
                <label>
                  Nombre:
                  <input
                    type="text"
                    name="name"
                    value={customerInfo.name}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Teléfono:
                  <input
                    type="tel"
                    name="phone"
                    value={customerInfo.phone}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Dirección:
                  <input
                    type="text"
                    name="address"
                    value={customerInfo.address}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Correo electrónico:
                  <input
                    type="email"
                    name="email"
                    value={customerInfo.email}
                    onChange={handleInputChange}
                  />
                </label>
                <button type="button" onClick={handleCheckout}>
                  Confirmar compra
                </button>
              </form>
            </div>
          )}

          <button onClick={clearCart}>Vaciar carrito</button>
        </>
      )}
        {showAlert && (
        <CustomAlert message="Orden enviada con éxito" onClose={() => setShowAlert(false)} />
      )}
    </div>
  );
};

export default Cart;
