import { Container, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductImage1 from "../../assets/image-product-1.jpg";
import { useEffect, useState } from "react";

function ProductImageDisplay({ imgUrl }) {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Trigger the animation on imgUrl change
    setFadeIn(false); // Reset the animation
    const timeout = setTimeout(() => {
      setFadeIn(true); // Re-trigger animation
    }, 10); // small timeout ensures DOM update

    return () => clearTimeout(timeout); // cleanup
  }, [imgUrl]);

  return (
    <Container className="my-4 w-50">
      <Image
        src={imgUrl}
        rounded
        className={`product--image__display mx-auto d-block w-100 ${
          fadeIn ? "fade-in" : ""
        }`}
      />
    </Container>
    // <Container className="my-4 w-50 d-flex overflow-hidden ">
    //   {imageArr.map((image, i) => (
    //     <Image
    //       key={i}
    //       src={image}
    //       rounded
    //       className="product--image__display mx-auto d-block w-100"
    //     />
    //   ))}
    // </Container>
  );
}

export default ProductImageDisplay;
