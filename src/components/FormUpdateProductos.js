import { Container, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

const FormUpdateProductos = ({ editProduct, getProducts, setShow }) => {
    console.log(editProduct, "producto de form update")
  const [producto, setProducto] = useState(editProduct);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    updateProducts(producto);
    Swal.fire({
      icon: "success",
      title: "Producto actualizado",
      showConfirmButton: false,
      timer: 1500,
    });
    setProducto({
      nombre: "",
      precio: "",
      descripcion: "",
      presentacion: "",
      stock: "",
      imagen: "",
    });
    setShow(false);
  };

  const handleChange = (e) => {
    setProducto({
      ...producto,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>Carga de productos</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                value={producto.nombre}
                onChange={handleChange}
                className="form-control"
                name="nombre"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="precio" className="form-label">
                Precio
              </label>
              <input
                type="number"
                value={producto.precio}
                onChange={handleChange}
                className="form-control"
                name="precio"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="descripcion" className="form-label">
                Descripcion
              </label>
              <textarea
                className="form-control"
                name="descripcion"
                value={producto.descripcion}
                onChange={handleChange}
                rows="1"
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="presentacion" className="form-label">
                Presentacion
              </label>
              <input
                type="text"
                value={producto.presentacion}
                onChange={handleChange}
                className="form-control"
                name="presentacion"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="stock" className="form-label">
                stock
              </label>
              <input
                type="number"
                value={producto.stock}
                onChange={handleChange}
                className="form-control"
                name="stock"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="imagen" className="form-label">
                Imagen
              </label>
              <input
                type="text"
                value={producto.imagen}
                onChange={handleChange}
                className="form-control"
                name="imagen"
              />
            </div>
            <div className="mb-3">
              <Button variant="outline-success" type="submit">
                Editar Producto
              </Button>
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default FormUpdateProductos;
