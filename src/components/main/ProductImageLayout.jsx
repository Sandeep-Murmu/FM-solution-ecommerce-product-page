import { Col, Container, Image, Row } from "react-bootstrap";

import ProductImageDisplay from "./ProductImageDisplay";
import ProductImageGallery from "./ProductImageGallery";

import ProductImage1 from "../../assets/image-product-1.jpg";
import ProductImage2 from "../../assets/image-product-2.jpg";
import ProductImage3 from "../../assets/image-product-3.jpg";
import ProductImage4 from "../../assets/image-product-4.jpg";
import { useState } from "react";

const imgArr = [ProductImage1, ProductImage2, ProductImage3, ProductImage4];

function ProductImageLayout() {
  const [imageIndex, setimageIdex] = useState(0);

  return (
    <div>
      <ProductImageDisplay imgUrl={imgArr[imageIndex]} />

      <Container className="w-50">
        <Row>
          {imgArr.map((img, i) => (
            <Col key={i}>
              <Image
                src={img}
                rounded
                className="product--gallery__image mx-auto d-block w-100"
                onClick={() => setimageIdex(i)}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default ProductImageLayout;
