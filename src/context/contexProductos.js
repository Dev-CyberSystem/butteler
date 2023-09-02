"use client";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export const ProductosContext = createContext();

const ProductsContext = ({ children }) => {
  const [productos, setProductos] = useState([]);

  //Petición a la API Http GET  ----> Obtiene info

  const getProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/productos");
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
      Swal.fire({
        icon: "success",
        title: "Producto creado",
        showConfirmButton: false,
        timer: 1500,
      });
      getProducts();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Algo salió mal!",
      });
      console.log(error, "error de productos");
    }
  };

  //Petición a la API Http PUT  ----> Actualiza info

  const updateProducts = async (producto) => {
    try {
      await axios.put(
        `http://localhost:8080/api/productos/actualizar/${producto._id}`,
        producto
      );
      Swal.fire({
        icon: "success",
        title: "Producto actualizado",
        showConfirmButton: false,
        timer: 1500,
      });
      await getProducts();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Algo salió mal!",
      });
      console.log(error, "error de productos");
    }
  };

  //Petición a la API Http DELETE  ----> Elimina info

  const deleteProducts = async (_id, producto) => {
    console.log(producto, "productos Delete");
    Swal.fire({
      title: `¿Estás seguro que queres eliminar el producto "${producto.nombre}"?`,
      text: "No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Si, eliminar!",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axios.delete(
            `http://localhost:8080/api/productos/eliminar/${_id}`
          );

          getProducts();
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Algo salió mal!",
          });
          console.log(error);
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Eliminación cancelada!",
        });
      }
    });
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
