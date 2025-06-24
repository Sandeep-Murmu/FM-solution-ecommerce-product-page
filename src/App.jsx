import { Col, Container, Row } from "react-bootstrap";
import ProductDetail from "./components/main/ProductDetail";
import ProductImageLayout from "./components/main/ProductImageLayout";

const product = {
  productTag: "sneaker company",
  productName: "Fall limited Edition Sneakers",
  productDescription:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
  productPrice: 250,
  productNetPrice: 125,
  productDiscount: 50,
};

function App() {
  return (
    <div className="main">
      <Container fluid="md">
        <Row>
          <Col>
            <ProductImageLayout />
          </Col>
          <Col className="d-flex flex-column justify-content-center">
            <ProductDetail product={product} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
