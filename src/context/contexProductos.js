"use client"
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ProductosContext = createContext();

const ProductsContext = ({ children }) => {
  const [productos, setProductos] = useState([]);

  //Petición a la API Http GET  ----> Obtiene info

  const getProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/productos");
      console.log(response.data, "response productos")
      setProductos(response.data);
    } catch (error) {
      console.log(error, "error de productos");
    }
  };

  //Petición a la API Http POST  ---> Crea info

  const addProducts = async (productos) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/productos/crear",
        productos
      );
      getProducts();
    } catch (error) {
      console.log(error, "error de productos");
    }
  };

  //Petición a la API Http PUT  ----> Actualiza info

  const updateProducts = async (producto) => {
    console.log(producto, "producto de context");
    try {
      await axios.put(
        `http://localhost:8080/api/productos/actualizar/${producto._id}`,
        producto
      );
      await getProducts();
    } catch (error) {
      console.log(error, "error de productos");
    }
  };

  //Petición a la API Http DELETE  ----> Elimina info

  const deleteProducts = async (_id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/api/productos/eliminar/${_id}`
      );
      console.log(response);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductosContext.Provider
      value={{
        productos,
        setProductos,
        addProducts,
        deleteProducts,
        updateProducts,
      }}
    >
      {children}
    </ProductosContext.Provider>
  );
};

export default ProductsContext;
