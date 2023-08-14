import { Container, Row, Col, Button } from "react-bootstrap";
import { useState} from "react";
import Swal from "sweetalert2";
import axios from "axios";

const FormProductos = () => {
  const [productos, setProductos] = useState({
    nombre: "",
    precio: "",
    descripcion: "",
    presentacion: "",
    stock: "",
    imagen: "",
  });

  const addProducts = async (productos) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/productos/crear",
        productos
      );
    } catch (error) {
      console.log(error, "error de productos");
    }
  };

  const handleChange = (e) => {
    setProductos({ ...productos, [e.target.name]: e.target.value }); // ...productos es para que no se borre lo que ya tenia
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    addProducts(productos);
    Swal.fire({
      icon: "success",
      title: "Producto agregado",
      showConfirmButton: false,
      timer: 1500,
    });
    setProductos({
      nombre: "",
      precio: "",
      descripcion: "",
      presentacion: "",
      stock: "",
      imagen: "",
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
                value={productos.nombre}
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
                value={productos.precio}
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
                value={productos.descripcion}
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
                value={productos.presentacion}
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
                value={productos.stock}
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
                value={productos.imagen}
                onChange={handleChange}
                className="form-control"
                name="imagen"
              />
            </div>
            <div className="mb-3">
              <Button variant="outline-success" type="submit">
                Agregar Productos
              </Button>
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default FormProductos;
