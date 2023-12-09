
import useProductos from './productos';

const useProductFunctions = () => {
  const products = useProductos();

  const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 200);
    });
  };

  const getProductById = (productId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find((prod) => prod.id === productId));
      }, 200);
    });
  };

  const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.filter((prod) => prod.category === categoryId));
      }, 200);
    });
  };

  return {
    getProducts,
    getProductById,
    getProductsByCategory,
  };
};

export default useProductFunctions;




