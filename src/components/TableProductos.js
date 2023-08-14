import { useEffect, useState } from "react";
import { Table, Button, Modal} from "react-bootstrap";
import axios from "axios";
import FormUpdateProductos from "./FormUpdateProductos";

const TableProductos = () => {
  const [productos, setProductos] = useState([]);
  const [show, setShow] = useState(false);
    const [editProduct, setEditProduct] = useState(null);


  const getProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/productos");

      setProductos(response.data);
    } catch (error) {
      console.log(error);
    }
  };

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

    
    const handleClose = () => setShow(false);

  const handleDelete = (_id) => {
    console.log(_id);
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
              <tr style={{color: "white"}}>
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
                <tr style={{color: "white"}}>
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
                <Modal.Header style={{backgroundColor: "black"}}closeButton>  
                    <Modal.Title>Editar Producto</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{backgroundColor: "black"}}>
                    <FormUpdateProductos editProduct={editProduct} getProducts={getProducts} setShow={setShow} />
                </Modal.Body>
            </Modal>

        </>
      )}
    </>
  );
};

export default TableProductos;
