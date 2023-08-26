import {  useState, useContext } from "react";
import { Table, Button, Modal } from "react-bootstrap";
import FormUpdateProductos from "./FormUpdateProductos";
import { ProductosContext } from "../context/contexProductos";

const TableProductos = () => {
  const [show, setShow] = useState(false);
  const [editProduct, setEditProduct] = useState(null);

  const { productos, deleteProducts } = useContext(ProductosContext);

  const handleClose = () => setShow(false);

  const handleDelete = (_id) => {
    deleteProducts(_id);
  };

  const handleEdit = (producto) => {
    setEditProduct(producto);
    setShow(true);
  };

  return (
    <>
      <h4>Tabla Productos</h4>

      {productos.length === 0 ? (
        "no hay productos en stock"
      ) : (
        <>
          <Table responsive>
            <thead>
              <tr style={{ color: "white" }}>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Descripción</th>
                <th>Presentación</th>
                <th>Stock</th>
                <th>Acciones</th>
              </tr>
            </thead>
            {productos.map((producto) => (
              <tbody key={producto._id}>
                <tr style={{ color: "white" }}>
                  <td>{producto.nombre}</td>
                  <td>{producto.precio}</td>
                  <td>{producto.descripcion}</td>
                  <td>{producto.presentacion}</td>
                  <td>{producto.stock}</td>
                  <td>
                    <Button
                      variant="warning"
                      className="m-1"
                      onClick={() => handleEdit(producto)}
                    >
                      Editar
                    </Button>
                    <Button
                      variant="danger"
                      className="m-1"
                      onClick={() => handleDelete(producto._id)}
                    >
                      Eliminar
                    </Button>
                  </td>
                </tr>
              </tbody>
            ))}
          </Table>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header style={{ backgroundColor: "black" }} closeButton>
              <Modal.Title>Editar Producto</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ backgroundColor: "black" }}>
              <FormUpdateProductos
                editProduct={editProduct}
                setShow={setShow}
              />
            </Modal.Body>
          </Modal>
        </>
      )}
    </>
  );
};

export default TableProductos;
