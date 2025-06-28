import { Col, Container, Row } from "react-bootstrap";
import ProductDetail from "./components/main/ProductDetail";
import ProductImageLayout from "./components/main/ProductImageLayout";
import { useEffect, useState } from "react";
import Header from "./components/header/Header";

const product = {
  productTag: "sneaker company",
  productName: "Fall limited Edition Sneakers",
  productDescription:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
  productNetPrice: 125,
  productPrice: 250,
  productDiscount: 50,
};

function App() {
  const [quantity, setQuantiy] = useState(0);
  const [price, setPrice] = useState(0);

  const handleQuantity = function (control) {
    if (control === "up") {
      setQuantiy((q) => q + 1);
    } else if (control === "down" && quantity > 0) {
      setQuantiy((q) => q - 1);
    } else {
      return;
    }
  };

  useEffect(
    function () {
      setPrice(quantity * product.productNetPrice);
    },
    [quantity]
  );

  return (
    <>
      <Header />
      <div className="main">
        <Container fluid="md">
          <Row>
            <Col>
              <ProductImageLayout />
            </Col>
            <Col className="d-flex flex-column justify-content-center">
              <ProductDetail
                product={product}
                quantity={quantity}
                quantityControl={handleQuantity}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;
