import { useState } from "react";
import ProductImageLayout from "./components/main/ProductImageLayout";
import ProductImageLightbox from "./components/main/ProductImageLightbox";

function App() {
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
          <ProductImageLayout
            openLightbox={openLightbox}
            closeLightbox={setOpenLightbox}
            currentImage={currentImage}
            updateCurrentImage={setCurrentImage}
            imageIndex={imageIndex}
            updateImageIndex={setimageIdex}
          />
        </ProductImageLightbox>
      ) : (
        <ProductImageLayout
          imageClick={handleImageClick}
          imageIndex={imageIndex}
          updateImageIndex={setimageIdex}
        />
      )}
    </>
  );
}

export default App;
