import { useState } from "react";
import ProductImageLayout from "./components/main/ProductImageLayout";
import ProductImageLightbox from "./components/main/ProductImageLightbox";

function App() {
  const [openLightbox, setOpenLightbox] = useState(false);

  const handleImageClick = function () {
    setOpenLightbox(true);
  };

  return (
    <>
      {openLightbox ? (
        <ProductImageLightbox>
          <ProductImageLayout openLightbox={openLightbox} closeLightbox={setOpenLightbox}  />
        </ProductImageLightbox>
      ) : (
        <ProductImageLayout imageClick={handleImageClick} />
      )}
    </>
  );
}

export default App;
