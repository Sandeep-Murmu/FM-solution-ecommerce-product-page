import { useState } from "react";
import ProductImageGallery from "./ProductImageGallery";
import ProductImageLightbox from "./ProductImageLightbox";

function ProductImageLayout() {
  const [openLightbox, setOpenLightbox] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [imageIndex, setimageIdex] = useState(0);

  const handleImageClick = function () {
    setOpenLightbox(true);
  };

  return (
    <>
      {openLightbox ? (
        <ProductImageLightbox>
          <ProductImageGallery
            openLightbox={openLightbox}
            closeLightbox={setOpenLightbox}
            currentImage={currentImage}
            updateCurrentImage={setCurrentImage}
            imageIndex={imageIndex}
            updateImageIndex={setimageIdex}
          />
        </ProductImageLightbox>
      ) : (
        <ProductImageGallery
          imageClick={handleImageClick}
          imageIndex={imageIndex}
          updateImageIndex={setimageIdex}
        />
      )}
    </>
  );
}

export default ProductImageLayout;
