import React from 'react';
import './alertaCompra.css';

const CustomAlert = ({ message, onClose }) => {
  return (
    <div className="custom-alert">
      <p>{message}</p>
      <button onClick={onClose}>Cerrar</button>
    </div>
  );
};

export default CustomAlert;