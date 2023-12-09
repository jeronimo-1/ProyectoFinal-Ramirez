import { useEffect, useState } from 'react';
import { db } from './firebaseConfig';
import {  collection, getDocs } from 'firebase/firestore';


const useProductos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const productosSnapshot = await getDocs(collection(db, 'items'));
        const productosArray = productosSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProductos(productosArray);
      } catch (error) {
        console.error('Error al obtener productos: ', error);
      }
    };

    obtenerProductos();
  }, []);

  return productos;
};

export default useProductos;