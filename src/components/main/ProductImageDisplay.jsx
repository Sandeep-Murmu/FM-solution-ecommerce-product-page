import { Container, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";

function ProductImageDisplay({
  imgUrl,
  imageClick,
  nextImage,
  prevImage,
  openLightbox,
  closeLightbox,
}) {
  const [fadeIn, setFadeIn] = useState(false);

  // apply fade animation on image change
  useEffect(() => {
    // Trigger the animation on imgUrl change
    setFadeIn(false); // Reset the animation
    const timeout = setTimeout(() => {
      setFadeIn(true); // Re-trigger animation
    }, 10); // small timeout ensures DOM update

    return () => clearTimeout(timeout); // cleanup
  }, [imgUrl]);

  return (
    <Container
      fluid="md"
      className={`mt-5 mb-4 ${openLightbox ? "" : "product-lightbox-width"}`}
    >
      <Container className="product--image__container">
        <Image
          src={imgUrl}
          rounded
          className={`product--image__display mx-auto d-block w-100  ${
            fadeIn ? "fade-in" : ""
          }`}
          onClick={imageClick}
        />
        {openLightbox && (
          <>
            <button
              className="lightbox__close--btn"
              onClick={() => closeLightbox(false)}
            >
              <img src="./images/icon-close.svg" alt="icon-close" />
            </button>
            <button
              className="product--image__navigation product--prev"
              onClick={prevImage}
            >
              <img src="./images/icon-previous.svg" alt="icon-next" />
            </button>
            <button
              className="product--image__navigation product--next"
              onClick={nextImage}
            >
              <img src="./images/icon-next.svg" alt="icon-next" />
            </button>
          </>
        )}
      </Container>
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
