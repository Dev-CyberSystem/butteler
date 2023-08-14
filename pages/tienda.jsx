import { useState, useEffect } from "react";
import Layouts from "@/src/layouts/Layouts";
import Link from "next/link";
import { Card, Button } from "react-bootstrap";
import axios from "axios";
const Tienda = () => {
  const [productos, setProductos] = useState([]);

  const traerProductos = async () => {
    const res = await axios.get("http://localhost:8080/api/productos");
    setProductos(res.data);
  };

  useEffect(() => {
    traerProductos();
  }, []);

  return (
    <Layouts>
      <div className="container">
        <h1>Tienda</h1>
        <div className="d-flex flex-wrap">
          {productos.map((producto) => (
            <div key={producto.id} className="col-12 col-md-4 mb-4">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={producto.imagen} />
                <Card.Body>
                  <Card.Title style={{ color: "black" }}>
                    {producto.nombre}
                  </Card.Title>
                  <Card.Text style={{ color: "black" }}>
                    Precio: ${producto.precio}
                  </Card.Text>
                  <Card.Text style={{ color: "black" }}>
                    Presentacion: {producto.presentacion}
                  </Card.Text>
                  <Card.Text style={{ color: "black" }}>
                    Descripción: {producto.descripcion}
                  </Card.Text>
                  <Button variant="primary">Agregar al carrito</Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </Layouts>
  );
};
export default Tienda;
