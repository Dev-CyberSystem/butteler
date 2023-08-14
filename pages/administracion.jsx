import { Container, Row, Col, Button } from "react-bootstrap";
import FormProductos from "@/src/components/FormProductos";
import TableProductos from "@/src/components/TableProductos";
import Layouts from "@/src/layouts/Layouts";

const administracion = () => {
  return (
    <Layouts>
      <h1>Administración</h1>
      <Container>
        <Row>
          <TableProductos />
          <Col>
            <FormProductos />
          </Col>
        </Row>
      </Container>
    </Layouts>
  );
};

export default administracion;
