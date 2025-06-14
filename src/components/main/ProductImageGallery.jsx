import { Col, Container, Image, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductImage1 from "../../assets/image-product-1.jpg";
import ProductImage2 from "../../assets/image-product-2.jpg";
import ProductImage3 from "../../assets/image-product-3.jpg";
import ProductImage4 from "../../assets/image-product-4.jpg";

function ProductImageGallery() {
  return (
    <Container className="w-50">
      <Row>
        <Col>
          <Image src={ProductImage1} rounded className="product--gallery__image active mx-auto d-block w-100"  />
        </Col>
        <Col>
          <Image src={ProductImage2} rounded className="product--gallery__image mx-auto d-block w-100" />
        </Col>
        <Col>
          <Image src={ProductImage3} rounded className="product--gallery__image mx-auto d-block w-100" />
        </Col>
        <Col>
          <Image src={ProductImage4} rounded className="product--gallery__image mx-auto d-block w-100" />
        </Col>
      </Row>
    </Container>
  );
}

export default ProductImageGallery;
