import { useState, useContext, useEffect } from "react";
import { Table, Button, Modal } from "react-bootstrap";
import FormUpdateProductos from "./FormUpdateProductos";
import { UsuariosContext } from "../context/contextUsers";
const TableUsuarios = () => {
  const [show, setShow] = useState(false);
  const [editUsers, setEditUsers] = useState(null);

  const { usuarios, deleteUser } = useContext(UsuariosContext);

  console.log(usuarios, "usuarios de table usuarios");
  const handleClose = () => setShow(false);

  const handleDelete = (_id) => {
    console.log(_id);
    deleteUser(_id);
  };

  const handleEdit = (usuarios) => {
    setEditUsers(usuarios);
    setShow(true);
  };

  return (
    <>
      <h4>Tabla Usuarios</h4>

      {usuarios.length === 0 ? (
        "no hay usuarios registrados"
      ) : (
        <>
          <Table responsive>
            <thead>
              <tr style={{ color: "white" }}>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Email</th>
                <th>Telefono</th>
                <th>Rol</th>
                <th>Acciones</th>
              </tr>
            </thead>
            {usuarios.map((usuario) => (
              <tbody key={usuario._id}>
                <tr style={{ color: "white" }}>
                  <td>{usuario.nombre}</td>
                  <td>{usuario.apellido}</td>
                  <td>{usuario.email}</td>
                  <td>{usuario.telefono}</td>
                  <td>{usuario.rol}</td>
                  <td>
                    <Button
                      variant="warning"
                      className="m-1"
                      onClick={() => handleEdit(usuario)}
                    >
                      Editar
                    </Button>
                    <Button
                      variant="danger"
                      className="m-1"
                      onClick={() => handleDelete(usuario._id)}
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
              <Modal.Title>Editar Usuario</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ backgroundColor: "black" }}>
              <FormUpdateProductos editUsers={editUsers} setShow={setShow} />
            </Modal.Body>
          </Modal>
        </>
      )}
    </>
  );
};

export default TableUsuarios;
