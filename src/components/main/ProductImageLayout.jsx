import { Col, Container, Image, Row } from "react-bootstrap";

import ProductImageDisplay from "./ProductImageDisplay";
import ProductImageGallery from "./ProductImageGallery";

import ProductImage1 from "../../assets/image-product-1.jpg";
import ProductImage2 from "../../assets/image-product-2.jpg";
import ProductImage3 from "../../assets/image-product-3.jpg";
import ProductImage4 from "../../assets/image-product-4.jpg";
import { useState } from "react";
import ProductImageLightbox from "./ProductImageLightbox";

const imgArr = [ProductImage1, ProductImage2, ProductImage3, ProductImage4];

function ProductImageLayout({ imageClick, openLightbox, closeLightbox }) {
  const [imageIndex, setimageIdex] = useState(0);

  const nextImage = function () {
    if (imageIndex === imgArr.length - 1) setimageIdex(0);
    else setimageIdex((i) => i + 1);
  };

  const prevImage = function () {
    if (imageIndex === 0) setimageIdex(imgArr.length - 1);
    else setimageIdex((i) => i - 1);
  };

  return (
    <div>
      <ProductImageDisplay
        imgUrl={imgArr[imageIndex]}
        imageClick={imageClick}
        nextImage={nextImage}
        prevImage={prevImage}
        openLightbox={openLightbox}
        closeLightbox={closeLightbox}
      />

      <Container fluid="md">
        <Row className="product--gallery__container mx-auto">
          {imgArr.map((img, i) => (
            <Col key={i} className="product--gallery__col">
              <Image
                src={img}
                rounded
                className={`product--gallery__image mx-auto d-block w-100 ${
                  i === imageIndex ? "active-product-image" : ""
                }`}
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
