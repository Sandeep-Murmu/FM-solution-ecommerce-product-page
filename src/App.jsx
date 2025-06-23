import { Col, Container, Row } from "react-bootstrap";
import ProductDetail from "./components/main/ProductDetail";
import ProductImageLayout from "./components/main/ProductImageLayout";

function App() {
  return (
    <div className="main">
      <Container fluid="md">
        <Row>
          <Col>
            <ProductImageLayout />
          </Col>
          <Col>
            <ProductDetail />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
